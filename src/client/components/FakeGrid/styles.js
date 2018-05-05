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
    box-shadow: -1px 2px 10px 3px  rgba(25,25,25, 0.4) inset;
`;

export const FakeCell = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:${({ color }) => color};
    border-radius:2px;
    color:rgb(116,185,182);
    box-shadow: -1px 2px 5px 3px  rgba(45,45,45, 0.05) inset;
    font-size:2em;
    grid-area: ${({ pos }) => `cell_${pos}`};
    border-radius: 13px;
    overflow: hidden;
`;