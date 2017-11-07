import { map } from 'ramda';
import { CELLSGRIDONELOADED } from '../actions/loadCells';
import { MOVELEFT, MOVERIGHT, MOVETOP, MOVEBOTTOM } from '../actions/move';
import { moveTop } from '../actions/moveTop';
import { moveBottom } from '../actions/moveBottom';
import { moveRight } from '../actions/moveRight';
import { moveLeft } from '../actions/moveLeft';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CELLSGRIDONELOADED:
        return action.cellsGrid1;
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