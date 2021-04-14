import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
import {distanceFactory} from "./distance_model";

dotenv.config()
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const dbConnection = new Sequelize(config.database.distance);

dbConnection.authenticate()
    .then(() => {
        console.log('info', 'connected sequelize distance')
    })
    .catch((e: any) => {
        console.log('error', e)
    })

export const Distance = distanceFactory(dbConnection);
