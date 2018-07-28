import * as constants from './constants';

// File of customize error for the application

class NotValidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.customCode = constants.NOT_VALID_INPUT;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NotValidDistanceError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.customCode = constants.NOT_VALID_DISTANCE;
        Error.captureStackTrace(this, this.constructor);
    }
}

export {
    NotValidDistanceError,
    NotValidInputError
}