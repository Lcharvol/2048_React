import { INIT_PLAYERTWO } from '../actions/initPlayers';
import { UPDATE_LIFE_PLAYERTWO } from '../actions/updateLife';
import { HIT_PLAYER_TWO, REGEN_PLAYER_TWO } from '../actions/life';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HIT_PLAYER_TWO:
      return ({
        ...state,
        life: state.life - 1 < 0 ? state.life : state.life - 1,
      })
    case REGEN_PLAYER_TWO:
      return ({
        ...state,
        life: state.life + 1 > 10 ? state.life : state.life + 1,
      })
    case INIT_PLAYERTWO:
        return action.player;
    case UPDATE_LIFE_PLAYERTWO:
        return ({
          ...state,
          life: action.life,
        })
    default:
        return state;
  }
};

export default reducer;