import { INIT_PLAYERTWO } from '../actions/initPlayers';
import { UPDATE_LIFE_PLAYERTWO } from '../actions/updateLife';

const reducer = (state = {}, action) => {
  switch (action.type) {
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