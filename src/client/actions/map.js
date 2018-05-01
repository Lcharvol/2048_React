import generateIntitialMap from '../MapGenerator';

export const INIT_MAP = 'INIT_MAP';

export const getInitialMap = () => (dispatch) => {
    dispatch({ type: INIT_MAP, map: generateIntitialMap() });
};