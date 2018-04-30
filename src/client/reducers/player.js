import { INIT_PLAYER } from '../actions/initPlayers';
import { UPDATE_LIFE_PLAYER } from '../actions/updateLife';
import { HIT_PLAYER, REGEN_PLAYER } from '../actions/life';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HIT_PLAYER:
      return ({
        ...state,
        life: state.life - 1 < 0 ? state.life : state.life - 1,
      })
    case REGEN_PLAYER:
      return ({
        ...state,
        life: state.life + 1 > 10 ? state.life : state.life + 1,
      })
    case INIT_PLAYER:
        return action.player;
    case UPDATE_LIFE_PLAYER:
        return ({
          ...state,
          life: action.life,
        })
    default:
        return state;
  }
};

export default reducer;