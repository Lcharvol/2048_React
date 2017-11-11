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
    if (value !== 1) {
        return false;
    }
    if ((pos % 4) === 3) {
        return false;
    }
    if (isCellFree(pos + 1, cells)) {
        return true;
    };
    return false;
};

export const moveRight = cells => {
    return map(cell => {
        const newPos = canMove(cell.value, cell.pos, cells) ? cell.pos + 1 : cell.pos;
        return ({...cell, pos: newPos})
    }, cells)
};