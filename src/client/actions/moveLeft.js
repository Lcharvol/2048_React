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

const goLeft= (pos, cells) => {
    let newPos = pos;
    let dec = pos - 1;
    if (pos === 0) {
        return 0;
    }
    if (pos === -1) {
        return -1;
    }
    while (dec % 4 !== 3) {
        if (positionIsFree(cells, dec)) {
        newPos = dec;
        dec -= 1;
        }
        else return newPos;
    }
    return newPos;
};

export const moveLeft = cells => {
    return map(cell => (
        {...cell, pos: goLeft(cell.pos, cells)}
    ), cells)
};
