import { INIT_PLAYERONE } from '../actions/initPlayers';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_PLAYERONE:
        return action.player;
    default:
        return state;
  }
};

export default reducer;