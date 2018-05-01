import { map, isEmpty, times } from 'ramda';

import { INTIAL_GATES_NUMBER, INITIAL_MAP_SIZE } from './constants';

const checkGateCycle = [
    {
        id: 0,
        idToCheck: -(INITIAL_MAP_SIZE / INITIAL_MAP_SIZE),
        position: 'top',
    },
    {
        id: 1,
        idToCheck: (INITIAL_MAP_SIZE / INITIAL_MAP_SIZE),
        position: 'bottom',
    },
    {
        id: 2,
        idToCheck: 1,
        position: 'right',
    },
    {
        id: 3,
        idToCheck: -1,
        position: 'left',
    },
]

export const generateGate = (grid, newMap) => {
    if(newMap[grid.id].gates.length >= 2) return newMap;
    map(toCheck => {

    }, checkGateCycle)
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