import { latitudeFromDegToRadial, longitudeFromDegToRadial } from "../util";
import * as constants from "../../constants";
import Point from "../point";
import { NotValidDistanceError, NotValidInputError } from "../../error";

/**
 * This fn calculate the great circle distance for two points.
 * The formula is taken from Wikipedia (https://en.wikipedia.org/wiki/Great-circle_distance)
 * If the point are not valid, the function returns undefined.
 * @param firstPoint
 * @param secondPoint
 * @returns {number}
 */
export function greatCircleDistance(firstPoint, secondPoint) {
    try {
        if (!(firstPoint instanceof Point) || !(secondPoint instanceof Point)) {
            throw new NotValidInputError('[greatCircleDistance] - Input is not a Point');
        }
        const firstPointLat = latitudeFromDegToRadial(parseFloat(firstPoint.latitude));
        const secondPointLat = latitudeFromDegToRadial(parseFloat(secondPoint.latitude));
        // Difference longitude
        const dLot = longitudeFromDegToRadial(Math.abs(secondPoint.longitude - firstPoint.longitude));
        const centralAngle = Math.acos(
            (Math.sin(firstPointLat) * Math.sin(secondPointLat))
            + (Math.cos(firstPointLat) * Math.cos(secondPointLat) * Math.cos(dLot))
        );
        if (isNaN(centralAngle)) {
            throw new NotValidDistanceError('[greatCircleDistance] - Not valid distance, maybe some Points is malformed');
        }
        return constants.EARTH_RADIUS * centralAngle;
    } catch (e) {
        console.error('[greatCircleDistance] - Error:', e);
        return undefined;
    }
}
