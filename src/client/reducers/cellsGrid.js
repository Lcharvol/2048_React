import { LOAD_CELLS_GRID } from '../actions/loadCellsGrid';

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
    default:
      return state;
  }
};

export default reducer;