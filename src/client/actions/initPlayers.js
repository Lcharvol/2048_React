export const INIT_PLAYERONE = 'INIT_PLAYERONE';
export const INIT_PLAYERTWO = 'INIT_PLAYERTWO';

export const initPlayerOne = () => (dispatch) => {
    dispatch({ type: INIT_PLAYERONE, player: {
        player: 1,
        life: 8,
    }});
}

export const initPlayerTwo = () => (dispatch) => {
    dispatch({ type: INIT_PLAYERTWO, player: {
        player: 2,
        life: 3,
    } });
}

export const initPlayers = () => dispatch => {
    dispatch(initPlayerOne());
    dispatch(initPlayerTwo());
};