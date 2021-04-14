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

async function getLastPopularSearchValue(source: string, destination: string) {
    let result = await Distance.findOne({
        attributes: ['hits'],
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
    let popularSearch = result?.hits;
    if (popularSearch) {
        popularSearch++;
    } else {
        popularSearch = 1;
    }
    return popularSearch;
}

export async function updatePopularSearch(source: string, destination: string) {
    let result = await getLastPopularSearchValue(source, destination);
    Distance.update({
        hits: result
    }, {
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
    })
}

export async function getPopularSearch() {
    return await Distance.findOne({
        attributes: ['source', 'destination', 'hits'],
        order: [['hits', 'DESC']],
    });
}

