import { CELLSLOADED } from '../actions/loadCells';
import { MOVELEFT, MOVERIGHT, MOVETOP, MOVEBOTTOM } from '../actions/move';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CELLSLOADED:
        return action.cells;
    case MOVELEFT:
        return [];
    case MOVERIGHT:
      return [];
    case MOVETOP:
      return [];
    case MOVEBOTTOM:
      return [];
    default:
      return state;
  }
};

export default reducer;