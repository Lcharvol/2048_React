import styled from 'styled-components';

import { CELL_MARGIN } from '../../constants/map';

export const GridContainer = styled.div`
    display: grid;
    position:absolute;
    width:${({ size }) => `${size}px`};
    height:${({ size }) => `${size}px`};
    grid-gap: ${CELL_MARGIN}px;
    padding:10px;
    grid-template-areas: ${({ template }) => template};
    z-index:50;
    background: ${({ color }) => color};
    border-radius:3px;
    box-shadow: inset 12px 12px 30px rgba(25,25,25, 0.7);
`;

export const FakeCell = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:${({ color }) => color};
    border-radius:2px;
    color:rgb(116,185,182);
    box-shadow: inset 4px 4px 4px rgba(0,0, 0,0.05);
    font-size:2em;
    grid-area: ${({ pos }) => `cell_${pos}`};
    border-radius: 13px;
    overflow: hidden;
`;