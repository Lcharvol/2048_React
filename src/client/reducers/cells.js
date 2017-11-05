import { map } from 'ramda';
import { CELLSLOADED } from '../actions/loadCells';
import { MOVELEFT, MOVERIGHT, MOVETOP, MOVEBOTTOM } from '../actions/move';

const goTop = (pos, cells) => {
  if (pos === -1) {
    return -1;
  }
  let newPos = pos;
  cells.map((cell, index) => {
    if (pos % 4 === (index + 1) % 4 && (index + 1) < pos && (index + 1) < newPos && cells[index].pos === -1) {
      newPos = index + 1;
    }
  });
  return newPos;
};

const goBottom = (pos, cells) => {
  if (pos === -1) {
    return -1;
  }
  let newPos = pos;
  cells.map((cell, index) => {
    if (pos % 4 === (index + 1) % 4 && (index + 1) > pos && (index + 1) < 17) {
      newPos = index + 1;
    }
  });
  return newPos;
};

const goRight= (pos, cells) => {
  if (pos === -1) {
    return -1;
  }
  let newPos = pos;
  cells.map((cell, index) => {
    if (Math.ceil(pos / 4) === Math.ceil((index + 1) / 4) && (index + 1) > pos) {
      newPos = index + 1;
    }
  });
  return newPos;
};

const goLeft= (pos, cells) => {
  if (pos === -1) {
    return -1;
  }
  let newPos = pos;
  cells.map((cell, index) => {
    if (Math.ceil(pos / 4) === Math.ceil((index+  1) / 4) && (index + 1) < newPos) {
      newPos = index + 1;
    }
  });
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