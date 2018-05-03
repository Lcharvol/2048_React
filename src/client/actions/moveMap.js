import { map, propEq, find, equals, filter, findIndex } from 'ramda';

import { INITIAL_MAP_SIZE } from '../MapGenerator/constants';
import { getActiveGrid } from '../selectors/map';
import { addNewGrid } from '../components/Grid/utils';

export const moveMapTop = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
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

export const moveMapBottom = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
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

export const moveMapLeft = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
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

export const moveMapRight = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const newActiveGridPos = find(propEq('active', true), newMap).pos + Math.sqrt(INITIAL_MAP_SIZE);
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