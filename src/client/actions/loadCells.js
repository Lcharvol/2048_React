export const CELLS_GRID_LOADED = 'CELLS_GRID_LOADED';

export const loadCellsGrid = cellsGrid => (dispatch) => {
    dispatch({ type: CELLS_GRID_LOADED, cellsGrid });
};