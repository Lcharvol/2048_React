import { map } from 'ramda';
import { CELLSLOADED } from '../actions/loadCells';
import { MOVELEFT, MOVERIGHT, MOVETOP, MOVEBOTTOM } from '../actions/move';

const moveTop = cells => {
  return map(cell => (
    {...cell, pos: cell.pos - 4}
  ), cells)
};

const moveBottom = cells => {
  return map(cell => (
    {...cell, pos: cell.pos + 4}
  ), cells)
};

const moveRight= cells => {
  return map(cell => (
    {...cell, pos: cell.pos + 1}
  ), cells) 
};

const moveLeft = cells => {
  return map(cell => (
    {...cell, pos: cell.pos - 1}
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