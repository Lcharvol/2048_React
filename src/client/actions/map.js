import generateIntitialMap from '../MapGenerator';

export const INIT_MAP = 'INIT_MAP';
export const MOVE_MAP_TOP = 'MOVE_MAP_TOP';

export const getInitialMap = () => (dispatch) => {
    dispatch({ type: INIT_MAP, map: generateIntitialMap() });
};

export const moveMap = () => (dispatch) => {
    dispatch(({ type: MOVE_MAP_TOP }));
};