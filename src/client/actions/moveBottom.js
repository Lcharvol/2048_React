import { map, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if (pos >= (MAP_SIZE * MAP_SIZE) - MAP_SIZE) return false;
    const bottomCell = find(propEq('pos', pos + MAP_SIZE), cells);
    if(bottomCell.value === 0) return true;
};

export const moveBottom = ({ map: oldMap }) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const activeMapId = find(propEq('active', true), newMap).id;
    const grid = newMap[activeMapId];
    const { cellsGrid: { cells }, id }= grid;
    map(cell =>  {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const bottomCell = find(propEq('pos', pos + MAP_SIZE), cells);
                newMap[id].cellsGrid.cells[cell.id] = {...cells[cell.id], pos: bottomCell.pos };
                newMap[id].cellsGrid.cells[bottomCell.id] = {...cells[bottomCell.id], pos };
            }
        };
    }, cells)
    return newMap;
};