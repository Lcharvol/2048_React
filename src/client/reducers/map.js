import { INIT_MAP } from '../actions/map';
const reducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_MAP:
      return ({
        ...state,
        map: action.map,
      })
    default:
        return state;
  }
};

export default reducer;