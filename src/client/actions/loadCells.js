export const CELLSLOADED = 'CELLSLOADED';

export const cellsLoaded = cells => (dispatch) => {
   dispatch(({ type: CELLSLOADED, cells }));
}

const getRandomNumber = (min, max) => {
    let random = Math.round(min + (Math.random() * (max-min)));
    return random;
}
// getRandomStart(0, 15, false)
const getRandomStart = cells => {
    const pos1 = getRandomNumber(0, 15);
    let pos2 = getRandomNumber(0, 15);
    while(pos2 === pos1) {
        pos2 = getRandomNumber(0, 15);
    }
    console.log('pos1', pos1);
    console.log('pos2', pos2);
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

export const loadCells = cells => dispatch => {
    dispatch(cellsLoaded(getRandomStart(cells)));
}