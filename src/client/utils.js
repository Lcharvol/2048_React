import { equals, times, join, map } from 'ramda';

import { PLAYER_VALUE } from './constants/cellsvalue';
import { MAP_SIZE, CELL_SIZE, CELL_MARGIN } from './constants/map';
import {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
} from './constants/directions';

import { INITIAL_MAP_SIZE } from './MapGenerator/constants';

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

export const getGridWidth = () => getGridSize() + 55;

export const isAGate = (pos, gates) => {
    let res = false;
    map(gate => {
        if(equals(pos, gate.pos))
            res = true;
    }, gates)
    return res;
};

export const getMoveMapDirection = activeGridPos => {
    if(equals(activeGridPos, (Math.floor(INITIAL_MAP_SIZE / 2)))) {
        return LEFT;
    }
    return TOP;
};

export const getRandomDirection = () => {
    const directions = [TOP, BOTTOM, LEFT, RIGHT];
    return directions[getRandomNumber(0, 3)];
}