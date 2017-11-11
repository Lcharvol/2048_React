import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LifeCellContainer = styled.div`
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
    border-radius: 13px;
    overflow: hidden;
`;

const LifeIcon = styled.div`
    display:flex;
    width:20px;
    height:20px;
    background-color:  ${({ player }) => player === 1 ?
        '#69FF97' :
        '#F6416C'
    };
    margin-left:-3px;
    border-radius:100%;
`;

const LifeCell = ({ player, cell, left, top}) => (
    <LifeCellContainer left={left} top={top}>
        <LifeIcon player={player}/>
    </LifeCellContainer>
);

LifeCell.propTypes = {
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    cell: PropTypes.object.isRequired,
    player: PropTypes.number.isRequired,
}

export default LifeCell;