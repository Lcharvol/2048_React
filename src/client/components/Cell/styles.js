import styled from 'styled-components';

import cellIcon from '../../images/case.png';

export const CellContainer = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    border-radius:2px;
    box-shadow: ${({ color }) => `1px 1px 25px ${color}`};
    font-size:2em;
    width:80px;
    height:80px;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    transition: all 0.1s ease;
    background: url(${cellIcon});
    background-size: 730%;
    background-position: 235px 282px;
    border-radius: 13px;
    overflow: hidden;
`;

export const EmptyCell = styled.div`
`;

export const Texture = styled.div`
    width:100%;
    height:100%;
`;