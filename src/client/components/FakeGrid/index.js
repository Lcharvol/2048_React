import React from 'react';
import { array, object } from 'prop-types';
import { times } from 'ramda';

import { getGridTemplateAreas, getGridSize, isAGate } from '../../utils';
import {
    GridContainer,
    FakeCell,
} from './styles'
import { GATE_COLOR, FAKE_CELL_COLOR } from '../../colors';

const propTypes = {
    cells: array.isRequired,
    player: object.isRequired,
    gates: array.isRequired,
}

const FakeGrid = ({ cells, player, color, gates }) => (
    <GridContainer
        template={getGridTemplateAreas()}
        size={getGridSize()}
        player={player.player}
        color={color}
    >
        {times(i => (
            <FakeCell
                key={i}
                pos={i + 1}
                color={isAGate(i, gates) ? GATE_COLOR : FAKE_CELL_COLOR}
            />
        )
        , cells.length)}
    </GridContainer>
);

FakeGrid.propTypes = propTypes;

export default FakeGrid;