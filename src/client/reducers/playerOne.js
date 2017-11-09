import { INIT_PLAYERONE } from '../actions/initPlayers';
import { UPDATE_LIFE_PLAYERONE } from '../actions/updateLife';

const reducer = (state = {}, action) => {
  switch (action.type) {
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