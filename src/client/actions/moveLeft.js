import { map, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if ((pos % MAP_SIZE) === 0) return false;
    const leftCell = find(propEq('pos', pos - 1), cells);
    if(leftCell.value === 0) return true;
};

export const moveLeft = ({ cells }) => {
    let newCells = JSON.parse(JSON.stringify(cells));
    map(cell => {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const leftCell = find(propEq('pos', pos - 1), cells);
                newCells[cell.id] = {...cells[cell.id], pos: leftCell.pos };
                newCells[leftCell.id] = {...cells[leftCell.id], pos };
            }
        };
    }, cells)
    return newCells;
};