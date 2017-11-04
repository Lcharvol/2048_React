import { MAPLOADED } from '../actions/loadMap';

const reducer = (state = [], action) => {
  switch (action.type) {
    case MAPLOADED:
        return action.map;
    default:
      return state;
  }
};

export default reducer;