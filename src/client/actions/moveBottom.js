import { map } from 'ramda';

const isCellFree = (pos, cells) => {
    let free = 0;
    map(cell => {
        if (cell.pos === pos && cell.value < 0) {
            free += 1;
        };
        return cell;
    }, cells,)
    if (free === 0) {
        return true
    }
    return false
}

const canMove = (value, pos, cells) => {
    if (value < 0) {
        return false;
    }
    if (pos > 11 ) {
        return false;
    }
    if (isCellFree(pos + 4, cells)) {
        return true;
    };
    return false;
};

export const moveBottom = cells => {
    return map(cell => {
        const newPos = canMove(cell.value, cell.pos, cells) ? cell.pos + 4 : cell.pos;
        return ({...cell, pos: newPos})
    }, cells)
};