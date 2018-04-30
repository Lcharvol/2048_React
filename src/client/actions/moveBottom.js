import { map, equals, find, propEq } from 'ramda';

import { isAPlayerCell } from '../utils';

const canMove = (cell, cells) => {
    const { pos } = cell;
    if (pos > 11) return false;
    const bottomCell = find(propEq('pos', pos + 4), cells);
    if(bottomCell.value === 0) return true;
};

export const moveBottom = ({ cells }) => {
    let newCells = JSON.parse(JSON.stringify(cells));
    map(cell =>  {
        if(isAPlayerCell(cell)) {
            if(canMove(cell, cells)) {
                const { pos } = cell;
                const bottomCell = find(propEq('pos', pos + 4), cells);
                newCells[cell.id] = {...cells[cell.id], pos: bottomCell.pos };
                newCells[bottomCell.id] = {...cells[bottomCell.id], pos };
            }
        };
    }, cells)
    return newCells;
};