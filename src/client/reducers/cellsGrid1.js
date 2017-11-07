import { map } from 'ramda';
import { CELLSGRIDONELOADED } from '../actions/loadCells';
import { MOVELEFTPLAYERONE, MOVERIGHTPLAYERONE, MOVETOPPLAYERONE, MOVEBOTTOMPLAYERONE } from '../actions/move';
import { moveTop } from '../actions/moveTop';
import { moveBottom } from '../actions/moveBottom';
import { moveRight } from '../actions/moveRight';
import { moveLeft } from '../actions/moveLeft';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CELLSGRIDONELOADED:
        return action.cellsGrid1;
    case MOVELEFTPLAYERONE:
        return moveLeft(state);
    case MOVERIGHTPLAYERONE:
      return moveRight(state);
    case MOVETOPPLAYERONE:
      return moveTop(state);
    case MOVEBOTTOMPLAYERONE:
      return moveBottom(state);
    default:
      return state;
  }
};

export default reducer;