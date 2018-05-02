import { propEq, find } from 'ramda';

export const getMap = state => state.map.map;

export const getActiveGrid = state => find(propEq('active', true), state.map.map).cellsGrid.cells;