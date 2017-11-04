export const MAPLOADED = 'MAPLOADED';

export const mapLoaded = map => (dispatch) => {
   dispatch(({ type: MAPLOADED, map }));
}

export const loadMap = () => (dispatch) => {
    const map = new Array(16);
    dispatch(mapLoaded(map));
}