import { combineReducers } from 'redux';
import cellsGrid from './cellsGrid';
import player from './player';
import map from './map';

const reducer = combineReducers({
    cellsGrid,
    player,
    map,
});

export default reducer;