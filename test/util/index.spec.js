const chai = require('chai');
const expect = chai.expect;
import {latitudeFromDegToRadial, longitudeFromDegToRadial,
    isNumber} from '../../src/components/util/index';
import * as mockNumbers from '../../mock/numbers'
import * as mockLat from '../../mock/latitudine';
import * as mockLon from '../../mock/longitude';
import { NOT_VALID_INPUT } from '../../src/error/constants';


describe('### [latitudeFromDegToRadial]', () => {
    it ('Is fn', () => {
        expect(latitudeFromDegToRadial).to.be.a('function');
    });

    it ('Should transform radial - 1', () => {
        expect(latitudeFromDegToRadial(mockLat.validLatitude_1)).to.be.a('number');
    });

    it ('Should transform radial - 2', () => {
        expect(latitudeFromDegToRadial(mockLat.validLatitude_2)).to.be.a('number');
    });

    it ('Should transform radial - 3', () => {
        expect(latitudeFromDegToRadial(mockLat.validLatitude_3)).to.be.a('number');
    });

    it ('Should throw exception - 1', () => {
        try {
            latitudeFromDegToRadial(mockLat.notValidLatitude_1);
        } catch (e) {
            expect(e.customCode === NOT_VALID_INPUT);
            return Promise.resolve();
        }
        return Promise.reject(new Error('didn\'t catch exception'));
    });

    it ('Should throw exception - 2', () => {
        try {
            latitudeFromDegToRadial(mockLat.notValidLatitude_2);
        } catch (e) {
            expect(e.customCode === NOT_VALID_INPUT);
            return Promise.resolve();
        }
        return Promise.reject(new Error('didn\'t catch exception'));
    });

    it ('Should throw exception - 3', () => {
        try {
            latitudeFromDegToRadial(mockLat.notValidLatitude_3);
        } catch (e) {
            expect(e.customCode === NOT_VALID_INPUT);
            return Promise.resolve();
        }
        return Promise.reject(new Error('didn\'t catch exception'));
    });

});

describe('### [longitudeFromDegToRadial]', () => {
    it ('Is fn', () => {
        expect(longitudeFromDegToRadial).to.be.a('function');
    });

    it ('Should transform radial - 1', () => {
        expect(longitudeFromDegToRadial(mockLon.validLongitude_1)).to.be.a('number');
    });

    it ('Should transform radial - 2', () => {
        expect(longitudeFromDegToRadial(mockLon.validLongitude_2)).to.be.a('number');
    });

    it ('Should transform radial - 3', () => {
        expect(longitudeFromDegToRadial(mockLon.validLongitude_3)).to.be.a('number');
    });

    it ('Should throw exception - 1', () => {
        try {
            longitudeFromDegToRadial(mockLon.notValidLongitude_1);
        } catch (e) {
            expect(e.customCode === NOT_VALID_INPUT);
            return Promise.resolve();
        }
        return Promise.reject(new Error('didn\'t catch exception'));
    });

    it ('Should throw exception - 2', () => {
        try {
            longitudeFromDegToRadial(mockLon.notValidLongitude_2);
        } catch (e) {
            expect(e.customCode === NOT_VALID_INPUT);
            return Promise.resolve();
        }
        return Promise.reject(new Error('didn\'t catch exception'));
    });

    it ('Should throw exception - 3', () => {
        try {
            longitudeFromDegToRadial(mockLon.notValidLongitude_3);
        } catch (e) {
            expect(e.customCode === NOT_VALID_INPUT);
            return Promise.resolve();
        }
        return Promise.reject(new Error('didn\'t catch exception'));
    });

});

describe('### [isNumber]', () => {
    it ('Is fn', () => {
        expect(isNumber).to.be.a('function');
    });

    it ('Input is a valid number - 1', () => {
        expect(isNumber(mockNumbers.validNumber_1)).to.be.true;
    });

    it ('Input is a valid number - 2', () => {
        expect(isNumber(mockNumbers.validNumber_2)).to.be.true;
    });

    it ('Input is a valid number - 3', () => {
        expect(isNumber(mockNumbers.validNumber_3)).to.be.true;
    });

    it ('Input is not a valid number - 1', () => {
        expect(isNumber(mockNumbers.notValidNumber_1)).to.be.false;
    });

    it ('Input is not a valid number - 2', () => {
        expect(isNumber(mockNumbers.notValidNumber_2)).to.be.false;
    });

    it ('Input is not a valid number - 3', () => {
        expect(isNumber(mockNumbers.notValidNumber_3)).to.be.false;
    });

    it ('Input is not a valid number - 4', () => {
        expect(isNumber(mockNumbers.notValidNumber_4)).to.be.false;
    });

    it ('Input is not a valid number - 5', () => {
        expect(isNumber(mockNumbers.notValidNumber_5)).to.be.false;
    });
});