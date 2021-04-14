import express from 'express';
import {getDistanceBySourceAndDestination, saveToDB} from '../data_access/distance_data_access'
import {getDistanceKm} from '../business_logic/geolocation_bl'

let distanceRouter = express.Router();

distanceRouter.get('/', async function (req, res) {
    let {source, destination} = req.query;
    let distance
    if (source && destination) {
        try {
            let sourceString = source.toString();
            let destinationString = destination.toString();
            let result = await getDistanceBySourceAndDestination(sourceString, destinationString);
            if (result != null) {
                distance = result.distance;
            } else {
                distance = await getDistanceKm(sourceString, destinationString);
                if (distance) {
                    saveToDB(sourceString, destinationString, distance)
                } else {
                    res.status(400).send({error: 'cant find one of the cities'})
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    res.status(200).send({'distance': distance});
});

module.exports = distanceRouter;
