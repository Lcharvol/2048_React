import { moveLeft, moveRight, moveTop, moveBottom } from './cellsGrid1';
import { MOVELEFT, MOVERIGHT, MOVETOP, MOVEBOTTOM } from '../actions/move';
import { CELLSGRIDTWOLOADED } from '../actions/loadCells';

const reducer = (state = [], action) => {
    switch (action.type) {
      case CELLSGRIDTWOLOADED:
          return action.cellsGrid2;
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