import express from 'express';
import {getPopularSearch} from "../data_access/distance_data_access";

let popularSearchRouter = express.Router();

popularSearchRouter.get('/', async function (req, res) {
    try {
        let result = await getPopularSearch()
        res.status(200).send(result);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
});

module.exports = popularSearchRouter;
