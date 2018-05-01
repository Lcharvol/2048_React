import { map, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if (pos < MAP_SIZE) return false;
    const topCell = find(propEq('pos', pos - MAP_SIZE), cells);
    if(topCell.value === 0) return true;
};

export const moveTop = ({ cells }) => {
    let newCells = JSON.parse(JSON.stringify(cells));
    map(cell =>  {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const topCell = find(propEq('pos', pos - MAP_SIZE), cells);
                newCells[cell.id] = {...cells[cell.id], pos: topCell.pos };
                newCells[topCell.id] = {...cells[topCell.id], pos };
            }
        };
    }, cells)
    return newCells;
};