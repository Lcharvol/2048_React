import {
    findIndex,
    propEq,
    contains,
    map,
} from 'ramda';

import { PLAYER_VALUE } from '../constants/cellsvalue';
import { moveMap } from './map';

export const checkPlayerPosition = oldMap => {
    const activeMapIndex = findIndex(propEq('active', true))(oldMap);
    const grid = oldMap[activeMapIndex];
    const { cellsGrid: { cells }, id, gates, pos }= grid;
    const playerIndex = findIndex(propEq('value', PLAYER_VALUE))(cells);
    if(playerIndex === -1) return oldMap;
    map(gate => {
        if(gate.pos === cells[playerIndex].pos) {
            cells[playerIndex].value = 0;
            oldMap = moveMap(oldMap, gate.direction);
        }
    }, gates)
    return oldMap;
}
