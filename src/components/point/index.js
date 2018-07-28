/**
 * Point class in order to handle GPS Coordinates.
 * It has two properties: latitude and longitude
 */
class Point {
    constructor(latitude, longitude) {
        this._latitude = latitude;
        this._longitude = longitude;
    }


    get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        this._latitude = value;
    }

    get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        this._longitude = value;
    }
}

export default Point;