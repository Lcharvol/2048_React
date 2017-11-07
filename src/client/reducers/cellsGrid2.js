import { MOVELEFTPLAYERTWO, MOVERIGHTPLAYERTWO, MOVETOPPLAYERTWO, MOVEBOTTOMPLAYERTWO } from '../actions/move';
import { CELLSGRIDTWOLOADED } from '../actions/loadCells';
import { moveTop } from '../actions/moveTop';
import { moveBottom } from '../actions/moveBottom';
import { moveRight } from '../actions/moveRight';
import { moveLeft } from '../actions/moveLeft';

const reducer = (state = [], action) => {
    switch (action.type) {
      case CELLSGRIDTWOLOADED:
          return action.cellsGrid2;
      case MOVELEFTPLAYERTWO:
          return moveLeft(state);
      case MOVERIGHTPLAYERTWO:
        return moveRight(state);
      case MOVETOPPLAYERTWO:
        return moveTop(state);
      case MOVEBOTTOMPLAYERTWO:
        return moveBottom(state);
      default:
        return state;
    }
  };

  export default reducer;