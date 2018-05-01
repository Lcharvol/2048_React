import React from 'react';
import { equals } from 'ramda';
import {
    object,
    number,
} from 'prop-types';

import Block from '../Block';
import LifeCell from '../LifeCell';
import {
    PlayerCell,
    EmptyCell,
} from './styles';
import {
    EMPTY_CELL_VALUE,
    BLOCK_VALUE,
    LIFE_CELL_VALUE,
} from '../../constants/cellsvalue';

const propTypes = {
    player: object.isRequired,
    cell: object.isRequired,
    top: number.isRequired,
    left: number.isRequired,
}

const Cell = ({ player, cell, top, left }) => {
    if (equals(cell.value, EMPTY_CELL_VALUE))
        return <EmptyCell/>
    if (equals(cell.value, BLOCK_VALUE))
        return (
            <Block
                cell={cell}
                pos={cell.pos}
                top={top}
                left={left}
            />
        )
    if (equals(cell.value,  LIFE_CELL_VALUE))
        return (
            <LifeCell
                player={player.player}
                cell={cell}
                top={top}
                left={left}
            />
        )
    return (
        <PlayerCell 
            color={'#360940'}
            pos={cell.pos}
            top={top} 
            left={left}
        />
    )
};

Cell.propTypes = propTypes;

export default Cell;