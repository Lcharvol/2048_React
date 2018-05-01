import { times } from 'ramda';

import { INITIAL_MAP_SIZE } from './constants';
import { generateNewCells } from '../RoomGenerator/generate';
import { getRandomGradient } from '../colors';

const generateIntitiMap = () => {
    let initialMap = [];
    times(i => {
        initialMap = [...initialMap, {
            id: i,
            cellsGrid: generateNewCells(),
            color: getRandomGradient(),
        }]
    },INITIAL_MAP_SIZE)
    return initialMap;
};

export default generateIntitiMap;