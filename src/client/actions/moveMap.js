import { map, propEq, find, equals, remove } from 'ramda';

import { INITIAL_MAP_SIZE } from '../MapGenerator/constants';
import { getActiveGrid } from '../selectors/map';

export const moveMapTop = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos + (Math.sqrt(INITIAL_MAP_SIZE));
        if(newPos > INITIAL_MAP_SIZE - 1)
            newMap = remove(grid.id, grid.id, newMap);
        else {
            newMap[grid.id] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
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
            newMap = remove(grid.id, grid.id, newMap);
        else {
            newMap[grid.id] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}

export const moveMapLeft = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos + 1;
        if(grid.pos % Math.sqrt(INITIAL_MAP_SIZE) === 3)
            newMap = remove(grid.id, grid.id, newMap);
        else {
            newMap[grid.id] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}

export const moveMapRight = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
    map(grid => {
        let newPos = grid.pos - 1;
        if(grid.pos % Math.sqrt(INITIAL_MAP_SIZE) === 0)
            newMap = remove(grid.id, grid.id, newMap);
        else {
            newMap[grid.id] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}