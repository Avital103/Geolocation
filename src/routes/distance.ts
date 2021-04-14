import express from 'express';
import * as  distance_data_access from '../data_access/distance_data_access'

let distanceRouter = express.Router();

distanceRouter.get('/', async function (req, res) {
    let {source, destination} = req.query;
    let distance
    if (source && destination) {
        distance = await distance_data_access.getDistanceBySourceAndDestination(source.toString(), destination.toString());
    }
    res.status(200).send({'distance': distance});
});

module.exports = distanceRouter;
