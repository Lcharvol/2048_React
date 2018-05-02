import {
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_TOP,
  MOVE_BOTTOM,
} from '../actions/move';
import { INIT_MAP } from '../actions/map';

import { moveTop } from '../actions/moveTop';
import { moveBottom } from '../actions/moveBottom';
import { moveRight } from '../actions/moveRight';
import { moveLeft } from '../actions/moveLeft';


const reducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_MAP:
      return ({
        ...state,
        map: action.map,
      })
    case MOVE_LEFT:
      return ({
        ...state,
        map: moveLeft(state),
      })
    case MOVE_RIGHT:
      return ({
        ...state,
        map: moveRight(state),
      })
    case MOVE_TOP:
      return ({
        ...state,
        map: moveTop(state),
      })
    case MOVE_BOTTOM:
      return ({
        ...state,
        map: moveBottom(state),
      })
    default:
        return state;
  }
};

export default reducer;