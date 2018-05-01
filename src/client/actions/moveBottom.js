import { map, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';
import { MAP_SIZE } from '../constants/map';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if (pos >= (MAP_SIZE * MAP_SIZE) - MAP_SIZE) return false;
    const bottomCell = find(propEq('pos', pos + MAP_SIZE), cells);
    if(bottomCell.value === 0) return true;
};

export const moveBottom = ({ cells }) => {
    let newCells = JSON.parse(JSON.stringify(cells));
    map(cell =>  {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const bottomCell = find(propEq('pos', pos + MAP_SIZE), cells);
                newCells[cell.id] = {...cells[cell.id], pos: bottomCell.pos };
                newCells[bottomCell.id] = {...cells[bottomCell.id], pos };
            }
        };
    }, cells)
    return newCells;
};