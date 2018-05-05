import styled from 'styled-components';

import playerIcon from '../../../images/player.png';
import { CELL_SIZE } from '../../constants/map';

export const PlayerCellContainer = styled.div`
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
    background: url(${playerIcon});
    background-size: 100%;
    background-position: center;
    border-radius: 13px;
    overflow: hidden;
    opacity: ${({ isBig }) => isBig ? 1 : 0};
    transform: scale(${({ isBig }) => isBig ? 1 : 0});
    transition: all 0.2s;
`;

export const EmptyCell = styled.div`
`;