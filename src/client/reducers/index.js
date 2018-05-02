import { combineReducers } from 'redux';
import player from './player';
import map from './map';

const reducer = combineReducers({
    player,
    map,
});

export default reducer;