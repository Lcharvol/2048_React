import { LOAD_CELLS_GRID } from '../actions/loadCellsGrid';
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

const initialState = {
  cells:[],
  lvl: 0,
  entry: {},
  exit: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CELLS_GRID:
        return {
          ...state,
          cells: action.cells
        };
    case MOVE_LEFT:
      return {
        ...state,
        cells: moveLeft(state),
      };
    case MOVE_RIGHT:
      return {
        ...state,
        cells: moveRight(state),
      };
    case MOVE_TOP:
      return {
        ...state,
        cells: moveTop(state),
      };
    case MOVE_BOTTOM:
      return {
        ...state,
        cells: moveBottom(state),
      };
    default:
      return state;
  }
};

export default reducer;