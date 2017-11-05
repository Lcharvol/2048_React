export const MOVETOP = 'MOVETOP';
export const MOVEBOTTOM = 'MOVEBOTTOM';
export const MOVELEFT = 'MOVELEFT';
export const MOVERIGHT = 'MOVERIGHT';

export const move = event => (dispatch) => {
    if (event.key === 'ArrowUp') {
        dispatch(({ type: MOVETOP }));
    };
    if (event.key === 'ArrowDown') {
        dispatch(({ type: MOVEBOTTOM }));
    };
    if (event.key === 'ArrowLeft') {
        dispatch(({ type: MOVELEFT }));
    };
    if (event.key === 'ArrowRight') {
        dispatch(({ type: MOVERIGHT }));
    };
}