import {
    findIndex,
    propEq,
    contains,
    map,
} from 'ramda';

import { PLAYER_VALUE } from '../constants/cellsvalue';

export const checkPlayerPosition = ({ map: oldMap }) => {
    const activeMapId = findIndex(propEq('active', true))(oldMap);
    const grid = oldMap[activeMapId];
    const { cellsGrid: { cells }, id, gates }= grid;
    const playerIndex = findIndex(propEq('value', PLAYER_VALUE))(cells);
    if(playerIndex === -1) return oldMap;
    map(gate => {
        if(gate.pos === cells[playerIndex].pos) {
            oldMap[findIndex(propEq('pos', gate.gridPosExit))(cells)].active = true;
            oldMap[activeMapId].active = false;
        }
    }, gates)
    return oldMap;
}
