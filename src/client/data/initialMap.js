//Sorry but it's too late 
import {
    times
} from 'ramda';

import { getRandomNumber } from '../utils';
import { INITIAL_MAP_SIZE } from './constants';

const addPlayer = grid => {
    const randomPos = getRandomNumber(0, INITIAL_MAP_SIZE - 1)
    console.log('randomPos:' , randomPos)
    grid[randomPos] = {
        ...grid[randomPos],
        value: 1,
    }
    return grid;
};

export const cellsGrid = () => {
    let grid = [];
    times(i => grid = [...grid, { id: i, value: 0, pos: i }],INITIAL_MAP_SIZE)
    grid = addPlayer(grid);
    return grid;
}
