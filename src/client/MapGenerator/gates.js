import {
    map,
    isEmpty,
    times,
    findIndex,
    propEq,
    contains,
    equals,
} from 'ramda';

import {
    INTIAL_GATES_NUMBER,
    INITIAL_MAP_SIZE,
} from './constants';
import {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
} from '../constants/directions';
import { MAP_SIZE } from '../constants/map';
import { EMPTY_CELL_VALUE } from '../constants/cellsvalue';
import { getRandomNumber } from '../utils';

export const getGateDirection = gatePos => {
    if((gatePos % MAP_SIZE) === 0 ) return LEFT;
    else if((gatePos % MAP_SIZE) === (MAP_SIZE - 1)) return RIGHT
    else if(Math.floor(gatePos / MAP_SIZE) < 1) return TOP;
    else if(Math.floor(gatePos / MAP_SIZE) < MAP_SIZE) return BOTTOM;
};

export const generatateGatePos = () => {
    const dir = getRandomNumber(1, 2);
    const side = getRandomNumber(1, 2);
    let add = 0;
    let mult = 1;
    if(equals(dir, 1)) {
    if (equals(side, 2))
        add = MAP_SIZE * (MAP_SIZE - 1);
    return getRandomNumber(0, MAP_SIZE - 1) + add;
    } else {
    if (equals(side, 2)) { 
        add = MAP_SIZE - 1;
        mult = MAP_SIZE;
    }
    else
        mult = MAP_SIZE;
    return (getRandomNumber(0, MAP_SIZE - 1) * mult) + add;
    }
};

export const generateGate = (grid, newMap) => {
    const { cellsGrid: { cells }, id, gates } = grid;
    const gridIndex = findIndex(propEq('id', id))(newMap)
    let newGate = {};
    let gatePos = generatateGatePos();
    let cellAtPos = findIndex(propEq('pos', gatePos))(cells);
    while((cells[cellAtPos].value !== EMPTY_CELL_VALUE) && contains(propEq('pos', gatePos), gates)) {
        gatePos = generatateGatePos();
        cellAtPos = findIndex(propEq('pos', gatePos))(cells);
    }
    const direction = getGateDirection(gatePos);
    newGate = {
        pos: gatePos,
        direction,
    }; 
    newMap[gridIndex].gates = [...newMap[gridIndex].gates, newGate];
    return newMap;
};

export const generateGates = initialMap => {
    let newMap = JSON.parse(JSON.stringify(initialMap));
    map(grid => {
        if(isEmpty(grid.gates))
            times(() => newMap = generateGate(grid, newMap), INTIAL_GATES_NUMBER);
    },initialMap)
    return newMap;
};