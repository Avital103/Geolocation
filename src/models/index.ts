import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
import {distanceFactory} from "./distance_model";

dotenv.config()
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const dbConnection = new Sequelize(config.database.distance);

export async function checkConnectionToDB() {
    await dbConnection.authenticate()
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        })
}

export const Distance = distanceFactory(dbConnection);
