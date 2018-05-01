import styled from 'styled-components'

import { getGridSize } from '../../utils';

export const Container = styled.div`
    position:relative;
    display:grid;
    grid-template-areas: ${({ template }) => template};
`;

export const Spacer = styled.div`
    position:relative;
    width:${({ width = '20px' }) => width};
    height:${({ height = 0 }) => height};
`;

export const MainGridContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction: row;
    padding:5px;
    width:${getGridSize() + 50}px;
    height:${getGridSize() + 50}px;
    border-radius: 4px;
    background-color:rgb(22,22,22);
    box-shadow: inset 15px 15px 20px rgba(15,15, 15, 0.5);
    z-index:10;
    grid-area:${({ gridArea }) => gridArea};
    transition-delay:1s;
`;

export const HiddenGridContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction: row;
    width:${getGridSize() + 50}px;
    height:${getGridSize() + 50}px;
    padding:5px;
    border-radius: 4px;
    background-color:rgb(22,22,22);
    box-shadow: inset 15px 15px 20px rgba(15,15, 15, 0.5);
    opacity:0.3;
    z-index:5;
    grid-area: ${({ gridArea }) => gridArea};
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