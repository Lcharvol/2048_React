import { map } from 'ramda';

const canMoveRight = (cells, pos) => {
    let freeCell = Math.ceil((pos + 1) / 4);
    cells.map(cell => {
        if((cell.pos % 4) === (pos % 4) && cell.pos > pos) {
            freeCell -= 1;
        }
    });
    if (freeCell > 0) {
        return true
    }
    return false;
}
const goRight= (pos, cells) => {
    let newPos = pos;
    let dec = pos + 1;
    if (pos === -1) {
        return -1;
    }
    while (dec % 4 !== 0) {
        if (canMoveRight(cells, dec)) {
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