import { map, find, propEq, findIndex } from 'ramda';

import { checkPlayerPosition } from './checkPosition';
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
    const activeMapId = findIndex(propEq('active', true))(newMap);
    const grid = newMap[activeMapId];
    const { cellsGrid: { cells } }= grid;
    let hasMoved = false;
    map(cell => {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                hasMoved = true;
                const { pos } = cell;
                const leftCell = find(propEq('pos', pos - 1), cells);
                newMap[activeMapId].cellsGrid.cells[cell.id] = {...cells[cell.id], pos: leftCell.pos };
                newMap[activeMapId].cellsGrid.cells[leftCell.id] = {...cells[leftCell.id], pos };
            }
        };
    }, cells)
    if(hasMoved)
        newMap = checkPlayerPosition(newMap);
    return newMap;
};