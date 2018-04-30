import styled from 'styled-components';

import blockIcon from '../../../images/case.png';

export const BlockContainer = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:#ecf0f1;
    border-radius:2px;
    box-shadow: 2px 2px 2px rgba(0,0, 0,0.2);
    font-size:2em;
    width:80px;
    height:80px;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    transition: all 0.1s ease;
    background: url(${blockIcon});
    background-size: 103%;
    background-position: 0px 0px;
    border-radius: 13px;
`;

export const Texture = styled.div`
    width:100%;
    height:100%;
`;