import { combineReducers } from 'redux';
import cellsGrid1 from './cellsGrid1';
import cellsGrid2 from './cellsGrid2';
import playerOne from './playerOne';
import playerTwo from './playerTwo';

const reducer = combineReducers({
    cellsGrid1,
    cellsGrid2,
    playerOne,
    playerTwo,
});

export default reducer;