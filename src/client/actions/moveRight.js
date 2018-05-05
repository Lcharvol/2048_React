import { map, find, propEq, findIndex } from 'ramda';

import { checkPlayerPosition } from './checkPosition';
import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if ((pos % MAP_SIZE) === MAP_SIZE - 1) return false;
    const rightCell = find(propEq('pos', pos + 1), cells);
    if(rightCell.value === 0) return true;
};

export const moveRight = ({ map: oldMap }) => {
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
                const rightCell = find(propEq('pos', pos + 1), cells);
                newMap[activeMapId].cellsGrid.cells[cell.id] = {...cells[cell.id], pos: rightCell.pos };
                newMap[activeMapId].cellsGrid.cells[rightCell.id] = {...cells[rightCell.id], pos};
            }
        };
    }, cells);
    if(hasMoved)
        newMap = checkPlayerPosition(newMap);
    return newMap;
};