import { map, propEq, find, equals } from 'ramda';

import { INITIAL_MAP_SIZE } from '../MapGenerator/constants';
import { getActiveGrid } from '../selectors/map';

export const moveMapTop = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos + (Math.sqrt(INITIAL_MAP_SIZE));
        if(newPos > INITIAL_MAP_SIZE - 1)
            newPos -= INITIAL_MAP_SIZE;
        newMap[grid.id] = {
            ...grid,
            pos: newPos,
            // active: equals(newActiveGridPos, newPos) ? true : false,
        }
    },newMap);

    return newMap;
}

export const moveMapBottom = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos - (Math.sqrt(INITIAL_MAP_SIZE));
        if(newPos < 0)
            newPos += INITIAL_MAP_SIZE;
        newMap[grid.id] = {
            ...grid,
            pos: newPos,
            // active: equals(newActiveGridPos, newPos) ? true : false,
        }
    },newMap);

    return newMap;
}

export const moveMapLeft = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos + 1;
        if(newPos > INITIAL_MAP_SIZE - 1)
            newPos -= INITIAL_MAP_SIZE;
        newMap[grid.id] = {
            ...grid,
            pos: newPos,
            // active: equals(newActiveGridPos, newPos) ? true : false,
        }
    },newMap);

    return newMap;
}

export const moveMapRight = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos - 1;
        if(newPos < 0) {
            newPos += INITIAL_MAP_SIZE;
        }
        newMap[grid.id] = {
            ...grid,
            pos: newPos,
            // active: equals(newActiveGridPos, newPos) ? true : false,
        }
    },newMap);

    return newMap;
}