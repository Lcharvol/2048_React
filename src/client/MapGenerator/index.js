import { times } from 'ramda';

import { INITIAL_MAP_SIZE } from './constants';
import { generateNewCells } from '../RoomGenerator/generate';
import { getRandomGradient } from '../colors';
import { generateGates } from './gates';

const isActiveGrid = i => i === Math.ceil((INITIAL_MAP_SIZE / 2) - 1) ? true : false

const generateIntitiMap = () => {
    let initialMap = [];
    times(i => {
        initialMap = [...initialMap, {
            id: i,
            cellsGrid: generateNewCells(false),
            color: getRandomGradient(),
            gates: [],
            active: isActiveGrid(i),
            pos: i,
        }]
    },INITIAL_MAP_SIZE)
    initialMap = generateGates(initialMap);
    return initialMap;
};

export default generateIntitiMap;