import { NotValidInputError } from '../../error';
import * as constants from '../../constants';

/**
 * This fn validates the input and transform latitude from degrees to radial
 * @param degrees
 * @returns {*}
 */
export function latitudeFromDegToRadial(degrees) {
    if (!isNumber(degrees)
        || (degrees > constants.MAX_LATITUDE_VALUE)
        || (degrees < constants.MIN_LATITUDE_VALUE)) {
        throw new NotValidInputError('[latitudeFromDegToRadial] - Malformed input - Input is not a valid latitude')
    }
    return _fromDegToRadial(degrees);
}

/**
 * This fn validates the input and transform longitude from degrees to radial
 * @param degrees
 * @returns {*}
 */
export function longitudeFromDegToRadial(degrees) {
    if (!isNumber(degrees)
        || (degrees > constants.MAX_LONGITUDE_VALUE)
        || (degrees < constants.MIN_LONGITUDE_VALUE)) {
        throw new NotValidInputError('[latitudeFromDegToRadial] - Malformed input - Input is not a valid latitude')
    }
    return _fromDegToRadial(degrees);
}

/**
 * Checks if input is a number
 * @param number
 * @private
 */
export function isNumber(number) {
    return typeof number === 'number';
}

/**
 * This fn takes as an input a degree value and return the radical transformation
 * @param degree
 * @private
 */
function _fromDegToRadial(degrees) {
    return degrees * (Math.PI / 180);
}
