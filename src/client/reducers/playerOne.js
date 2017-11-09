import { INIT_PLAYERONE } from '../actions/initPlayers';
import { UPDATE_LIFE_PLAYERONE } from '../actions/updateLife';
import { HIT_PLAYER_ONE, REGEN_PLAYER_ONE } from '../actions/life';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HIT_PLAYER_ONE:
      return ({
        ...state,
        life: state.life - 1 < 0 ? state.life : state.life - 1,
      })
    case REGEN_PLAYER_ONE:
      return ({
        ...state,
        life: state.life + 1 > 10 ? state.life : state.life + 1,
      })
    case INIT_PLAYERONE:
        return action.player;
    case UPDATE_LIFE_PLAYERONE:
        return ({
          ...state,
          life: action.life,
        })
    default:
        return state;
  }
};

export default reducer;