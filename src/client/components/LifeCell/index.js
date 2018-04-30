import React from 'react';
import {
    number,
    object,
} from 'prop-types';

import {
    LifeCellContainer,
    LifeIcon,
} from './styles'

const propTypes = {
    left: number.isRequired,
    top: number.isRequired,
    cell: object.isRequired,
    player: number.isRequired,
}

const LifeCell = ({ player, cell, left, top}) => (
    <LifeCellContainer left={left} top={top}>
        <LifeIcon player={player}/>
    </LifeCellContainer>
);

LifeCell.propTypes = propTypes;

export default LifeCell;