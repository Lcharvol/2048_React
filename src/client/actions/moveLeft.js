import { map, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if ((pos % MAP_SIZE) === 0) return false;
    const leftCell = find(propEq('pos', pos - 1), cells);
    if(leftCell.value === 0) return true;
};

export const moveLeft = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const activeMapId = find(propEq('active', true), newMap).id;
    const grid = newMap[activeMapId];
    const { cellsGrid: { cells }, id }= grid;
    map(cell => {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const leftCell = find(propEq('pos', pos - 1), cells);
                newMap[id].cellsGrid.cells[cell.id] = {...cells[cell.id], pos: leftCell.pos };
                newMap[id].cellsGrid.cells[leftCell.id] = {...cells[leftCell.id], pos };
            }
        };
    }, cells)
    return newMap;
};