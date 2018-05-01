import React from 'react';
import { array, object } from 'prop-types';
import { map } from 'ramda';

import { getGridTemplateAreas, getGridSize } from '../../utils';
import {
    GridContainer,
    FakeCell,
} from './styles'

const propTypes = {
    cells: array.isRequired,
    player: object.isRequired,
}

const FakeGrid = ({ cells, player, color }) => (
    <GridContainer
        template={getGridTemplateAreas()}
        size={getGridSize()}
        player={player.player}
        color={color}
    >   
        {map(cell => <FakeCell key={cell.id} pos={cell.id + 1} value={cell.value}/>, cells)}
    </GridContainer>
);

FakeGrid.propTypes = propTypes;

export default FakeGrid;