import { equals } from 'ramda';

import { PLAYER_VALUE } from './constants/cellsvalue';

export const getRandomNumber = (min, max) => {
    let random = Math.round(min + (Math.random() * (max-min)));
    return random;
};

export const isAPlayerCell = cell => equals(cell.value, PLAYER_VALUE);