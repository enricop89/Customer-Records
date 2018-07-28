import Point from '../src/components/point/index';

export const validPoint_1 = new Point(52.986375, -6.043701);
export const validPoint_2 = new Point(52.986375, -10.27699);

export const notValidPoint_1 = new Point(52.986375, 'ciao');
export const notValidPoint_2 = 'ciao';