import { notValidPoint_1, validPoint_1, validPoint_2, notValidPoint_2 } from "../../mock/point";

const chai = require('chai');
const expect = chai.expect;

import { greatCircleDistance } from '../../src/components/greatCircleDistance';

describe('### [Great circle distance]', () => {
    it('Is fn', () => {
        expect(greatCircleDistance).to.be.a('function');
    });

    it('Should return a number', () => {
        const result = greatCircleDistance(validPoint_1, validPoint_2);
        expect(result).to.be.a('number');
    });

    it('Should throw exception - 1', () => {
        const result = greatCircleDistance(validPoint_1, notValidPoint_1);
        expect(result).to.be.undefined;
    });

    it('Should throw exception - 2', () => {
        const result = greatCircleDistance(validPoint_1, notValidPoint_2);
        expect(result).to.be.undefined;
    });
});