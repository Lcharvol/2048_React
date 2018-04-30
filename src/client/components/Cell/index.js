import React from 'react';
import {
    object,
    number,
} from 'prop-types';

import Case from '../Case';
import LifeCell from '../LifeCell';
import {
    CellContainer,
    EmptyCell,
    Texture,
} from './styles';

const propTypes = {
    player: object.isRequired,
    cell: object.isRequired,
    top: number.isRequired,
    left: number.isRequired,
}

const Cell = ({ player, cell, top, left }) => {
    if (cell.value === 0) {
        return <EmptyCell/>
    }
    if (cell.value === -1) {
        return (
            <Case
                cell={cell}
                pos={cell.pos}
                top={top}
                left={left}
            />
        )
    }
    if (cell.value === 2) {
        return (
            <LifeCell
                player={player.player}
                cell={cell}
                top={top}
                left={left}
            />
        )
    }
    return (
        <CellContainer 
            color={player.player === 1 ? 'rgba(163, 235, 12, 0.4)' : '#360940'}
            pos={cell.pos} top={top} 
            left={left}
        >
            <Texture />
        </CellContainer>
    )
};

Cell.propTypes = propTypes;

export default Cell;