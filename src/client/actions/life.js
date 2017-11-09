export const HIT_PLAYER_ONE = 'HIT_PLAYER_ONE';
export const REGEN_PLAYER_ONE = 'REGEN_PLAYER_ONE';
export const HIT_PLAYER_TWO = 'HIT_PLAYER_TWO';
export const REGEN_PLAYER_TWO = 'REGEN_PLAYER_TWO';

export const getHitPlayerOne = () => (dispatch) => {
    dispatch({ type: HIT_PLAYER_ONE });
};

export const getRegenPlayerOne = () => (dispatch) => {
    dispatch({ type: REGEN_PLAYER_ONE });
};

export const getHitPlayerTwo = () => (dispatch) => {
    dispatch({ type: HIT_PLAYER_TWO });
};

export const getRegenPlayerTwo = () => (dispatch) => {
    dispatch({ type: REGEN_PLAYER_TWO });
};