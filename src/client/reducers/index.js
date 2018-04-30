import { combineReducers } from 'redux';
import cellsGrid from './cellsGrid';
import player from './player';

const reducer = combineReducers({
    cellsGrid,
    player,
});

export default reducer;