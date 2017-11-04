import { map } from 'ramda';

export const CELLSLOADED = 'CELLSLOADED';

export const cellsLoaded = cells => (dispatch) => {
   dispatch(({ type: CELLSLOADED, cells }));
}

const initCells = cells => map(cell => ({ value: 0 }), cells)

export const loadCells = () => (dispatch) => {
    const cells = new Array(16);
    dispatch(cellsLoaded(initCells(cells)));
}