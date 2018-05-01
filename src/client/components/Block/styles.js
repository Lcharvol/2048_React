import styled from 'styled-components';

import blockIcon from '../../../images/block.png';
import { CELL_SIZE } from '../../constants/map';

export const BlockContainer = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:2px;
    box-shadow: 2px 2px 2px rgba(0,0, 0,0.2);

    width:${CELL_SIZE}px;
    height:${CELL_SIZE}px;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    transition: all 0.1s ease;
    background: url(${blockIcon});
    background-size: 102%;
    background-position: center;
    border-radius: 13px;
`;

export const Texture = styled.div`
    width:100%;
    height:100%;
`;