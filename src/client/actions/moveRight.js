import { map, equals, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if ((pos % MAP_SIZE) === 3) return false;
    const rightCell = find(propEq('pos', pos + 1), cells);
    if(rightCell.value === 0) return true;
};

export const moveRight = ({ cells }) => {
    let newCells = JSON.parse(JSON.stringify(cells));
    map(cell =>  {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const rightCell = find(propEq('pos', pos + 1), cells);
                newCells[cell.id] = {...cells[cell.id], pos: rightCell.pos };
                newCells[rightCell.id] = {...cells[rightCell.id], pos};
            }
        };
    }, cells)
    return newCells;
};