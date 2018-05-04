import { map, propEq, equals, filter, findIndex } from 'ramda';

import { INITIAL_MAP_SIZE } from '../MapGenerator/constants';
import { addNewGrid } from '../components/Grid/utils';

export const moveMapTop = oldMap => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    map(grid => {
        let newPos = grid.pos + Math.sqrt(INITIAL_MAP_SIZE);
        if(newPos >= INITIAL_MAP_SIZE) {
            newMap = filter(g => g.id !== grid.id, newMap);
            newMap = addNewGrid(grid.id, grid.pos - 20, newMap);
        }
        else {
            newMap[findIndex(propEq('id', grid.id))(newMap)] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}

export const moveMapBottom = oldMap => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    map(grid => {
        let newPos = grid.pos - (Math.sqrt(INITIAL_MAP_SIZE));
        if(newPos < 0) {
            newMap = filter(g => g.id !== grid.id, newMap);
            newMap = addNewGrid(grid.id, grid.pos + 20, newMap);
        }
        else {
            newMap[findIndex(propEq('id', grid.id))(newMap)] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}

export const moveMapLeft = oldMap => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    map(grid => {
        let newPos = grid.pos + 1;
        if(grid.pos % Math.sqrt(INITIAL_MAP_SIZE) === Math.sqrt(INITIAL_MAP_SIZE) - 1) {
            newMap = filter(g => g.id !== grid.id, newMap);
            newMap = addNewGrid(grid.id, grid.pos - (Math.sqrt(INITIAL_MAP_SIZE) - 1), newMap);
        }
        else {
            newMap[findIndex(propEq('id', grid.id))(newMap)] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}

export const moveMapRight = oldMap => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    map(grid => {
        let newPos = grid.pos - 1;
        if(grid.pos % Math.sqrt(INITIAL_MAP_SIZE) === 0) {
            newMap = filter(g => g.id !== grid.id, newMap);
            newMap = addNewGrid(grid.id, grid.pos + (Math.sqrt(INITIAL_MAP_SIZE) - 1), newMap);
        }
        else {
            newMap[findIndex(propEq('id', grid.id))(newMap)] = {
                ...grid,
                pos: newPos,
                active: equals(newPos, Math.floor(INITIAL_MAP_SIZE / 2)) ? true : false,
            }
        }
    },newMap);

    return newMap;
}