import styled from 'styled-components';

import cellIcon from '../../../images/case2.png';
import { CELL_SIZE } from '../../constants/map';

export const PlayerCell = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:2px;
    box-shadow: ${({ color }) => `1px 1px 25px ${color}`};
    font-size:2em;
    width:${CELL_SIZE}px;
    height:${CELL_SIZE}px;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    transition: all 0.1s ease;
    background: url(${cellIcon});
    background-size: 100%;
    background-position: center;
    border-radius: 13px;
    overflow: hidden;
`;

export const EmptyCell = styled.div`
`;