import { combineReducers } from 'redux';
import cellsGrid1 from './cellsGrid1';
import cellsGrid2 from './cellsGrid2';

const reducer = combineReducers({
    cellsGrid1,
    cellsGrid2,
});

export default reducer;