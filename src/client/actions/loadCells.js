import { map } from 'ramda';

export const CELLSLOADED = 'CELLSLOADED';

export const cellsLoaded = cells => (dispatch) => {
   dispatch(({ type: CELLSLOADED, cells }));
}

const getRandomStart = cells => cells;

export const loadCells = cells => dispatch => {
    dispatch(cellsLoaded(getRandomStart(cells)));
}