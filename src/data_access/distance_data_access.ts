import {Distance} from "../models";
import {Op} from "sequelize";

export async function getDistanceBySourceAndDestination(source: string, destination: string) {
    let distance: number;
    let result = await Distance.findOne({
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
    if (result != null) {
        distance = result.distance;
    } else {
        distance = 0;
    }
    return distance;
}