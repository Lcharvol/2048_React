export const UPDATE_LIFE_PLAYERONE = 'UPDATE_LIFE_PLAYERONE';
export const UPDATE_LIFE_PLAYERTWO = 'UPDATE_LIFE_PLAYERTWO';

export const updateLifePlayerOne = life => (dispatch) => {
    dispatch({ type: UPDATE_LIFE_PLAYERONE, life });
};

export const updateLifePlayerTwo = life => (dispatch) => {
    dispatch({ type: UPDATE_LIFE_PLAYERTWO, life });
};