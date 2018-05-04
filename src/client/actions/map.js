import { equals, findIndex, propEq } from 'ramda';

import generateIntitialMap from '../MapGenerator';
import {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
} from '../constants/directions';
import {
    moveMapTop,
    moveMapBottom,
    moveMapRight,
    moveMapLeft,
} from './moveMap';
import { PLAYER_VALUE } from '../constants/cellsvalue';

export const INIT_MAP = 'INIT_MAP';

export const getInitialMap = () => (dispatch) => {
    dispatch({ type: INIT_MAP, map: generateIntitialMap() });
};

const addPlayer = oldMap => {
    console.log('oldMap:' , oldMap)
    const activeMapId = findIndex(propEq('active', true))(oldMap);
    const {cellsGrid: { cells }, gates} = oldMap[activeMapId];
    console.log('gates: ', gates);
    const newPlayerPos = gates[0].pos;
    const nePlayerIndex = findIndex(propEq('pos', newPlayerPos))(cells);
    cells[nePlayerIndex].value = PLAYER_VALUE;
    return oldMap;
};

export const moveMap = (oldMap, direction) => {
    if(equals(direction, TOP))
        oldMap = moveMapTop(oldMap);
    else if(equals(direction, BOTTOM))
        oldMap = moveMapBottom(oldMap);
    else if(equals(direction, LEFT))
        oldMap = moveMapLeft(oldMap);
    else if(equals(direction, RIGHT))
        oldMap = moveMapRight(oldMap);
    oldMap = addPlayer(oldMap);
    return oldMap;
};