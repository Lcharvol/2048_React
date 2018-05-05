import { map, find, propEq, findIndex } from 'ramda';

import { checkPlayerPosition } from './checkPosition';
import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if (pos < MAP_SIZE) return false;
    const topCell = find(propEq('pos', pos - MAP_SIZE), cells);
    if(topCell.value === 0) return true;
};

export const moveTop = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const activeMapId = findIndex(propEq('active', true))(newMap);
    const grid = newMap[activeMapId];
    const { cellsGrid: { cells } }= grid;
    let hasMoved = false;
    map(cell =>  {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                hasMoved = true;
                const { pos } = cell;
                const topCell = find(propEq('pos', pos - MAP_SIZE), cells);
                newMap[activeMapId].cellsGrid.cells[cell.id] = {...cells[cell.id], pos: topCell.pos };
                newMap[activeMapId].cellsGrid.cells[topCell.id] = {...cells[topCell.id], pos };
            }
        };
    }, cells);
    if(hasMoved)
        newMap = checkPlayerPosition(newMap);
    return newMap;
};