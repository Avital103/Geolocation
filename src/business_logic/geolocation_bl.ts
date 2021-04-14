import NodeGeocoder, {GenericOptions} from 'node-geocoder';
import {convertDistance, getDistance} from 'geolib';
import {GeolibInputCoordinates} from "geolib/es/types";

require('dotenv').config();

const options: GenericOptions = {
    provider: "opencage",
    apiKey: process.env.apiKey
};

const geocoder = NodeGeocoder(options);

export async function getLongitudeLatitudeInfo(cityName: string) {
    try {
        const res = await geocoder.geocode(cityName);
        if (res.length == 0) {
            return null;
        }
        if (res[0].latitude && res[0].longitude) {
            let longitudeLatitudeInfo: GeolibInputCoordinates = {
                latitude: res[0].latitude,
                longitude: res[0].longitude
            };
            return longitudeLatitudeInfo;
        }
        return null;
    } catch (err) {
        console.log(err)
    }
}

export async function getDistanceKm(source: string, destination: string) {
    try {
        let sourceLongitudeLatitudeInfo = await getLongitudeLatitudeInfo(source);
        let destinationLongitudeLatitudeInfo = await getLongitudeLatitudeInfo(destination);
        if (sourceLongitudeLatitudeInfo && destinationLongitudeLatitudeInfo) {
            let preciseDistance = getDistance(sourceLongitudeLatitudeInfo, destinationLongitudeLatitudeInfo);
            const distance = convertDistance(preciseDistance, 'km');
            console.log(distance)
            return distance;
        } else {
            return null;
        }
    } catch (e) {
        console.log(e)
    }
}
