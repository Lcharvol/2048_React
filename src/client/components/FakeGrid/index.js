import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import styled from 'styled-components';

import { getGridTemplateAreas, getGridSize } from '../../utils';
import {
    GridContainer,
    FakeCell,
} from './styles'

const FakeGrid = ({ cells, player }) => (
    <GridContainer
        template={getGridTemplateAreas()}
        size={getGridSize()}
        player={player.player}
    >
        {map(cell => <FakeCell key={cell.id} pos={cell.id + 1} value={cell.value}/>, cells)}
    </GridContainer>
);

FakeGrid.propTypes = {
    cells: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired,
}

export default FakeGrid;