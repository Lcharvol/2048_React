import { CELLSLOADED } from '../actions/loadCells';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CELLSLOADED:
        return action.cells;
    default:
      return state;
  }
};

export default reducer;