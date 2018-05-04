export const MOVE_TOP = 'MOVE_TOP';
export const MOVE_BOTTOM = 'MOVE_BOTTOM';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

export const CHECK_PLAYER_POSITION = 'CHECK_PLAYER_POSITION'

export const move = event => (dispatch) => {
    if (event.key === 'ArrowUp') {
        dispatch(({ type: MOVE_TOP }));
    };
    if (event.key === 'ArrowDown') {
        dispatch(({ type: MOVE_BOTTOM }));
    };
    if (event.key === 'ArrowLeft') {
        dispatch(({ type: MOVE_LEFT }));
    };
    if (event.key === 'ArrowRight') {
        dispatch(({ type: MOVE_RIGHT }));
    };
}