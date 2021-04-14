import {Distance} from "../models";
import {Op} from "sequelize";

export async function getDistanceBySourceAndDestination(source: string, destination: string) {
    return await Distance.findOne({
        attributes: ['distance'],
        where: {
            [Op.or]: [
                {
                    source: source,
                    destination: destination
                },
                {
                    source: destination,
                    destination: source
                }
            ]
        }
    });
}

export function saveToDB(source: string, destination: string, distance: number) {
    Distance.create({
        source: source,
        destination: destination,
        distance: distance
    });
}

