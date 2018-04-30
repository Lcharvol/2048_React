import { CELLS_GRID_LOADED } from '../actions/loadCells';
import {
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_TOP,
  MOVE_BOTTOM,
} from '../actions/move';
import { moveTop } from '../actions/moveTop';
import { moveBottom } from '../actions/moveBottom';
import { moveRight } from '../actions/moveRight';
import { moveLeft } from '../actions/moveLeft';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CELLS_GRID_LOADED:
        return action.cellsGrid;
    case MOVE_LEFT:
        return moveLeft(state);
    case MOVE_RIGHT:
      return moveRight(state);
    case MOVE_TOP:
      return moveTop(state);
    case MOVE_BOTTOM:
      return moveBottom(state);
    default:
      return state;
  }
};

export default reducer;