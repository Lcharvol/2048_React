import { map } from 'ramda';
export const CELLS_GRID_LOADED = 'CELLS_GRID_LOADED';

export const loadCellsGrid = cellsGrid => (dispatch) => {
    dispatch({ type: CELLS_GRID_LOADED, cellsGrid });
}
const getRandomNumber = (min, max) => {
    let random = Math.round(min + (Math.random() * (max-min)));
    return random;
}

const getRandomStart = cells => {
    let pos = getRandomNumber(0, 15);
    while (cells[pos].value !== 0) {
        pos = getRandomNumber(0, 15);
    }
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