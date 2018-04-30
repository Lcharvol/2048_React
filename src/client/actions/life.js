export const HIT_PLAYER = 'HIT_PLAYER';
export const REGEN_PLAYER = 'REGEN_PLAYER';

export const getHitPlayer = () => (dispatch) => {
    dispatch({ type: HIT_PLAYER });
};

export const getRegenPlayer = () => (dispatch) => {
    dispatch({ type: REGEN_PLAYER });
};