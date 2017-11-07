import { map } from 'ramda';

const canMoveBottom = (cells, pos) => {
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

const goBottom = (pos, cells) => {
    let newPos = pos;
    let dec = pos + 4;
    if (pos === -1) {
      return -1;
    }
    while (dec <= 15) {
      if (canMoveBottom(cells, dec)) {
        newPos = dec;
        dec += 4;
      }
      else return newPos;
    }
    return newPos;
  };

  export const moveBottom = cells => {
    return map(cell => (
      {...cell, pos: goBottom(cell.pos, cells)}
    ), cells)
  };