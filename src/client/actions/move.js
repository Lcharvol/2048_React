export const MOVETOPPLAYERONE = 'MOVETOPPLAYERONE';
export const MOVEBOTTOMPLAYERONE = 'MOVEBOTTOMPLAYERONE';
export const MOVELEFTPLAYERONE = 'MOVELEFTPLAYERONE';
export const MOVERIGHTPLAYERONE = 'MOVERIGHTPLAYERONE';
export const MOVETOPPLAYERTWO = 'MOVETOPPLAYERTWO';
export const MOVEBOTTOMPLAYERTWO = 'MOVEBOTTOMPLAYERTWO';
export const MOVELEFTPLAYERTWO = 'MOVELEFTPLAYERTWO';
export const MOVERIGHTPLAYERTWO = 'MOVERIGHTPLAYERTWO';

export const move = event => (dispatch) => {
    if (event.key === 'ArrowUp') {
        dispatch(({ type: MOVETOPPLAYERONE }));
    };
    if (event.key === 'ArrowDown') {
        dispatch(({ type: MOVEBOTTOMPLAYERONE }));
    };
    if (event.key === 'ArrowLeft') {
        dispatch(({ type: MOVELEFTPLAYERONE }));
    };
    if (event.key === 'ArrowRight') {
        dispatch(({ type: MOVERIGHTPLAYERONE }));
    };
    if (event.key === 'w') {
        dispatch(({ type: MOVETOPPLAYERTWO }));
    };
    if (event.key === 's') {
        dispatch(({ type: MOVEBOTTOMPLAYERTWO }));
    };
    if (event.key === 'a') {
        dispatch(({ type: MOVELEFTPLAYERTWO }));
    };
    if (event.key === 'd') {
        dispatch(({ type: MOVERIGHTPLAYERTWO }));
    };
}