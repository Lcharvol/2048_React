import styled from 'styled-components'

import { getGridSize, getGridWidth } from '../../utils';
import { INITIAL_MAP_SIZE } from '../../MapGenerator/constants';

export const Container = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    width:${Math.sqrt(INITIAL_MAP_SIZE) * getGridWidth()}px;
    height:${Math.sqrt(INITIAL_MAP_SIZE) * getGridWidth()}px;
`;

export const Spacer = styled.div`
    position:relative;
    width:${({ width = '20px' }) => width};
    height:${({ height = 0 }) => height};
`;

export const GridContainer = styled.div`
    position:absolute;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    display:flex;
    flex-direction: row;
    width:${getGridSize() + 50}px;
    height:${getGridSize() + 50}px;
    border-radius: 4px;
    box-shadow: inset 15px 15px 20px rgba(15,15, 15, 0.5);
    transition: all 0.2s ease-in-out;
    z-index: ${({ position }) => position};
`;

export const Map = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    overflow:hidden;
    opacity:${({ displayMap }) => displayMap ? 1 : 0};
    transition: all 0.5s ease;
`;

export const Shadow = styled.div`
    position:relative;
    padding:5px;
    min-width:${getGridSize() + 40}px;
    min-height:${getGridSize() + 40}px;
    border-radius: 4px;
    background-color:${({ isActive }) => isActive ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.6)'};
    z-index: 1000;
    transition: all 0.3s ease-in-out;
`;