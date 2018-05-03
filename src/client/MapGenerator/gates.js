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
    const { pos } = grid;
    const gridIndex = findIndex(propEq('id', grid.id))(newMap)
    let newGate = {};
    map(toCheck => {
        let gridToCheckIndex = findIndex(propEq('pos', pos + toCheck.posToCheck))(newMap);
        if(gridToCheckIndex < 0)
            return;
        let gridToCheck = newMap[gridToCheckIndex];
        
    }, checkGateCycle);
    if(isEmpty(newGate)) {
        newGate = {
            pos: 0,
            gridPosExit: 0,
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