export const LOAD_CELLS_GRID = 'LOAD_CELLS_GRID';

export const loadCellsGrid = ({ cells }) => (dispatch) => {
    dispatch({ type: LOAD_CELLS_GRID, cells });
};