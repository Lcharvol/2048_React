import { map } from 'ramda';
import { CELLSLOADED } from '../actions/loadCells';
import { MOVELEFT, MOVERIGHT, MOVETOP, MOVEBOTTOM } from '../actions/move';

const positionIsFree = (cells, pos) => {
  let freeCell = true;
  cells.map(cell => {
    if(cell.pos === pos && cell.value !== -1) {
      freeCell = false;
    }
  });
  return freeCell;
}

const goTop = (pos, cells) => {
  let newPos = pos;
  let dec = pos - 4;
  if (pos === -1) {
    return -1;
  }
  while (dec >= 0) {
    if (positionIsFree(cells, dec)) {
      return dec;
    }
    else return newPos;
  }
  return newPos;
};

const goBottom = (pos, cells) => {
  let newPos = pos;
  let dec = pos + 4;
  if (pos === -1) {
    return -1;
  }
  while (dec <= 15) {
    if (positionIsFree(cells, dec)) {
      return dec;
    }
    else return newPos;
  }
  return newPos;
};

const goRight= (pos, cells) => {
  let newPos = pos;
  let dec = pos + 1;
  if (pos === -1) {
    return -1;
  }
  while (dec % 4 !== 0) {
    if (positionIsFree(cells, dec)) {
      return dec;
    }
    else return newPos;
  }
  return newPos;
};

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
      return dec;
    }
    else return newPos;
  }
  return newPos;
};

const moveTop = cells => {
  return map(cell => (
    {...cell, pos: goTop(cell.pos, cells)}
  ), cells)
};

const moveBottom = cells => {
  return map(cell => (
    {...cell, pos: goBottom(cell.pos, cells)}
  ), cells)
};

const moveRight= cells => {
  return map(cell => (
    {...cell, pos: goRight(cell.pos, cells)}
  ), cells) 
};

const moveLeft = cells => {
  return map(cell => (
    {...cell, pos: goLeft(cell.pos, cells)}
  ), cells)
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case CELLSLOADED:
        return action.cells;
    case MOVELEFT:
        return moveLeft(state);
    case MOVERIGHT:
      return moveRight(state);
    case MOVETOP:
      return moveTop(state);
    case MOVEBOTTOM:
      return moveBottom(state);
    default:
      return state;
  }
};

export default reducer;