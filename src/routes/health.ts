import express from 'express';
import {dbConnection} from "../models";

let healthRouter = express.Router();

healthRouter.get('/', async function (req, res) {
    try {
        await dbConnection.authenticate()
        res.status(200).send();
    } catch (err) {
        console.error('Unable to connect to the database:', err)
        res.status(500).send(err);
    }
});

module.exports = healthRouter;
