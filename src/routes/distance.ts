import express from 'express';
import {getDistanceBySourceAndDestination, saveToDB, updatePopularSearch} from '../data_access/distance_data_access'
import {getDistanceKm} from '../business_logic/geolocation_bl'
import {checkConnectionToDB} from "../models";

let distanceRouter = express.Router();

distanceRouter.get('/', async function (req, res) {
    let distance
    let {source, destination} = req.query;
    if (source && destination) {
        try {
            let sourceString = source.toString();
            let destinationString = destination.toString();
            let result = null;
            let isConnectionOpen = await checkConnectionToDB();
            if (isConnectionOpen) {
                result = await getDistanceBySourceAndDestination(sourceString, destinationString);
                if (result != null) {
                    distance = result.distance;
                    await updatePopularSearch(sourceString, destinationString);
                }
            }
            if (!isConnectionOpen || result == null) {
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

distanceRouter.post('/', async function (req, res) {
    let {source, destination, distance} = req.body;
    if (source && destination && distance) {
        try {
            saveToDB(source, destination, distance);
            res.status(201).send();
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send('missing info');
    }
});

module.exports = distanceRouter;
