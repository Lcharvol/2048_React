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
    const pos1 = getRandomNumber(0, 15);
    let pos2 = getRandomNumber(0, 15);
    while(pos2 === pos1) {
        pos2 = getRandomNumber(0, 15);
    }
    return cells.map((cell) => {
        if (cell.id === pos1 || cell.id === pos2 ) {
            return ({
                ...cell,
                value: 2,
                pos: cell.id === pos1 ? pos1 : pos2,
            })
        }
        else return cell;
    })
}

export const loadCellsGrids = (cellsGrid1, cellsGrid2) => dispatch => {
    dispatch(cellsLoadedGrid1(getRandomStart(cellsGrid1)));
    dispatch(cellsLoadedGrid2(getRandomStart(cellsGrid2)));
};