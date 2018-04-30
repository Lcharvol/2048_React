export const INIT_PLAYER = 'INIT_PLAYER';

export const initPlayer = () => (dispatch) => {
    dispatch({ type: INIT_PLAYER, player: {
        life: 10,
    }});
};