import { generateNewCells } from '../../RoomGenerator/generate';
import { getRandomGradient } from '../../colors';
import { INITIAL_MAP_SIZE } from '../../MapGenerator/constants';
import { generateGates } from '../../MapGenerator/gates';

const generateNewGrid = (id, pos, cellsGrid) => ({
    active: false,
    cellsGrid,
    color: getRandomGradient(),
    gates: [],
    id: id + INITIAL_MAP_SIZE,
    pos,
});

export const addNewGrid = (id, pos, oldMap) => {
    let newMap = JSON.parse(JSON.stringify(oldMap));
    const cellsGrid = generateNewCells();
    const newGrid = generateNewGrid(id, pos, cellsGrid);
    newMap = [...newMap, newGrid];
    newMap = generateGates(newMap);
    return newMap;
}