import { INIT_PLAYERTWO } from '../actions/initPlayers';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_PLAYERTWO:
        return action.player;
    default:
        return state;
  }
};

export default reducer;