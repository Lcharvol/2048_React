export const MOVE_TOP = 'MOVE_TOP';
export const MOVE_BOTTOM = 'MOVE_BOTTOM';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

export const MOVE_MAP_BOTTOM = 'MOVE_MAP_BOTTOM';
export const MOVE_MAP_RIGHT = 'MOVE_MAP_RIGHT';
export const MOVE_MAP_LEFT = 'MOVE_MAP_LEFT';
export const CHECK_PLAYER_POSITION = 'CHECK_PLAYER_POSITION'

export const move = event => (dispatch) => {
    if (event.key === 'ArrowUp') {
        dispatch(({ type: MOVE_TOP }));
        dispatch(({ type: CHECK_PLAYER_POSITION }));
    };
    if (event.key === 'ArrowDown') {
        dispatch(({ type: MOVE_BOTTOM }));
        dispatch(({ type: CHECK_PLAYER_POSITION }));
    };
    if (event.key === 'ArrowLeft') {
        dispatch(({ type: MOVE_LEFT }));
        dispatch(({ type: CHECK_PLAYER_POSITION }));
    };
    if (event.key === 'ArrowRight') {
        dispatch(({ type: MOVE_RIGHT }));
        dispatch(({ type: CHECK_PLAYER_POSITION }));
    };
    if (event.key === 's') {
        dispatch(({ type: MOVE_MAP_BOTTOM }));
    };
    if (event.key === 'a') {
        dispatch(({ type: MOVE_MAP_LEFT }));
    };
    if (event.key === 'd') {
        dispatch(({ type: MOVE_MAP_RIGHT }));
    };
}