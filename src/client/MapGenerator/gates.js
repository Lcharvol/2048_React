import {
    map,
    isEmpty,
    times,
    findIndex,
    propEq,
} from 'ramda';

import {
    INTIAL_GATES_NUMBER,
    INITIAL_MAP_SIZE,
} from './constants';
import { MAP_SIZE } from '../constants/map';
import { EMPTY_CELL_VALUE } from '../constants/cellsvalue';
import { getRandomNumber, getRandomDirection } from '../utils';

const checkGateCycle = [
    {
        posToCheck: -(Math.sqrt(INITIAL_MAP_SIZE)),
        position: 'top',
    },
    {
        posToCheck: Math.sqrt(INITIAL_MAP_SIZE),
        position: 'bottom',
    },
    {
        posToCheck: 1,
        position: 'right',
    },
    {
        posToCheck: -1,
        position: 'left',
    },
]

export const generateGate = (grid, newMap) => {
    const { pos, cellsGrid: { cells } } = grid;
    const gridIndex = findIndex(propEq('id', grid.id))(newMap)
    let newGate = {};
    // map(toCheck => {
    //     let gridToCheckIndex = findIndex(propEq('pos', pos + toCheck.posToCheck))(newMap);
    //     if(gridToCheckIndex < 0)
    //         return;
    //     let gridToCheck = newMap[gridToCheckIndex];
        
    // }, checkGateCycle);
    if(isEmpty(newGate)) {
        let gatePos = getRandomNumber(0, MAP_SIZE - 1);
        let cellAtPos = findIndex(propEq('pos', gatePos))(cells);
        while(cells[cellAtPos].value !== EMPTY_CELL_VALUE) {
            gatePos = getRandomNumber(0, MAP_SIZE - 1);
            cellAtPos = findIndex(propEq('pos', gatePos))(cells);
        }
        newGate = {
            pos: gatePos,
            direction: getRandomDirection(),
        }; 
    }
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