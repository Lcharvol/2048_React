//Sorry but it's too late 
import {
    times,
    compose,
} from 'ramda';

import { getRandomNumber } from '../utils';
import { MAP_SIZE } from '../constants/map';
import {
    EMPTY_CELL_VALUE,
} from '../constants/cellsvalue';

const getNewEntry = (cells) => {};

const addPlayer = grid => {
    const randomPos = getRandomNumber(0, (MAP_SIZE * MAP_SIZE) - 1);
    grid[randomPos] = {
        ...grid[randomPos],
        value: 1,
    }
    return grid;
};

const addRandomBlocks = nb => grid => {
    times(() => {
        let randomId = getRandomNumber(0, (MAP_SIZE * MAP_SIZE) - 1);
        while(grid[randomId].value !== EMPTY_CELL_VALUE) {
            randomId = getRandomNumber(0, (MAP_SIZE * MAP_SIZE) - 1);
        };
        grid[randomId].value = -1;
    }, nb)
    return grid;
}

export const generateNewCells = (getPlayer = false) => {
    let cells = [];
    times(i => cells = [...cells, { id: i, value: 0, pos: i }], (MAP_SIZE * MAP_SIZE))
    cells = compose(
        addRandomBlocks(4),
    )(cells);
    if(getPlayer)
        cells = addPlayer(cells);
    const entry = getNewEntry(cells);
    return {
        cells,
        entry,
    };
}
