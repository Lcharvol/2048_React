import { equals, times, join } from 'ramda';

import { PLAYER_VALUE } from './constants/cellsvalue';
import { MAP_SIZE, CELL_SIZE, CELL_MARGIN } from './constants/map';

export const getRandomNumber = (min, max) => {
    let random = Math.round(min + (Math.random() * (max-min)));
    return random;
};

export const isAPlayerCell = cell => equals(cell.value, PLAYER_VALUE);

export const getGridTemplateAreas = () => {
    let templateTab = [];
    times(i => {
        let str = '';
        times(i2 => str += `cell_${(i * MAP_SIZE) + i2 + 1} `,MAP_SIZE);
        templateTab = [...templateTab, `'${str}'`];
    },MAP_SIZE);
    const templateString = join(' ', templateTab);
    return templateString;
};

export const getGridSize = () => (MAP_SIZE * (CELL_SIZE + CELL_MARGIN)) - CELL_MARGIN;