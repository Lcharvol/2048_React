import { map } from 'ramda';

const positionIsFree = (cells, pos) => {
    let freeCell = false;
    cells.map(cell => {
        if(cell.pos === pos && cell.value === -1) {
        freeCell = true;
        }
    });
    return freeCell;
}

const goRight= (pos, cells) => {
    let newPos = pos;
    let dec = pos + 1;
    if (pos === -1) {
        return -1;
    }
    while (dec % 4 !== 0) {
        if (positionIsFree(cells, dec)) {
        newPos = dec;
        dec += 1;
        }
        else return newPos;
    }
    return newPos;
};

export const moveRight= cells => {
    return map(cell => (
        {...cell, pos: goRight(cell.pos, cells)}
    ), cells) 
};