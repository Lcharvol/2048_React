export const UPDATE_LIFE_PLAYER = 'UPDATE_LIFE_PLAYER';

export const updateLifePlayer = life => (dispatch) => {
    dispatch({ type: UPDATE_LIFE_PLAYER, life });
};