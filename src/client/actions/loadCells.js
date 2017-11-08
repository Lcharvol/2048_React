import { map } from 'ramda';
export const CELLSGRIDONELOADED = 'CELLSGRIDONELOADED';
export const CELLSGRIDTWOLOADED = 'CELLSGRIDTWOLOADED';

export const cellsLoadedGrid1 = cellsGrid1 => (dispatch) => {
    dispatch({ type: CELLSGRIDONELOADED, cellsGrid1 });
}

export const cellsLoadedGrid2 = cellsGrid2 => (dispatch) => {
    dispatch({ type: CELLSGRIDTWOLOADED, cellsGrid2 });
}

const getRandomNumber = (min, max) => {
    let random = Math.round(min + (Math.random() * (max-min)));
    return random;
}

const getRandomStart = cells => {
    const pos = getRandomNumber(0, 15);
    const placePlayer = cells => map(cell => {
        if (cell.id === pos) {
            return ({
                ...cell,
                value: 1,
                pos,
            })
        }
        return cell;
    },cells)
    return placePlayer(cells);
}

export const loadCellsGrids = (cellsGrid1, cellsGrid2) => dispatch => {
    dispatch(cellsLoadedGrid1(getRandomStart(cellsGrid1)));
    dispatch(cellsLoadedGrid2(getRandomStart(cellsGrid2)));
};