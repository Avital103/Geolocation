import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
import {distanceFactory} from "./distance_model";

dotenv.config()
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

export const dbConnection = new Sequelize(config.database.distance);

dbConnection.sync()
export async function checkConnectionToDB() {
    try {
        await dbConnection.authenticate()
        return true;
    } catch (err) {
        console.error('Unable to connect to the database:', err)
        return false;
    }
}

export const Distance = distanceFactory(dbConnection);
