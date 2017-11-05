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
    console.log('pos1', pos1);
    console.log('pos2', pos2);
    while(pos2 === pos1) {
        pos2 = getRandomNumber(0, 15);
    }
    return cells.map((cell, index) => {
        if (index === pos1 || index === pos2 ) {
            return ({
                id: cell.id,
                value: 2,
                pos: index === pos1  ? pos1 + 1 : pos2 + 1,
            })
        }
        else return cell;
    })
}

export const loadCells = cells => dispatch => {
    dispatch(cellsLoaded(getRandomStart(cells)));
}