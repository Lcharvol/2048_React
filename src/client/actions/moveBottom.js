import { map } from 'ramda';

const countFreeCells = (pos, cells) => {
    let freeCells = 0;
    map(cell => {
        if (cell.pos % 4 === pos % 4 && cell.pos > pos && cell.value === 0) {
            freeCells += 1;
        }
        return cell;
    },cells);
    return freeCells;
}

const canMove = (value, pos, cells) => {
    if (value < 0) {
        return false;
    }
    if (pos > 11 ) {
        return false;
    }
    // if (countFreeCells(pos, cells) > 0) {
    //     return true;
    // }
    // return false;
    return true;
};

export const moveBottom = cells => {
    return map(cell => (
        {...cell, pos: canMove(cell.value, cell.pos, cells) ? cell.pos + 4 : cell.pos}
    ), cells)
};