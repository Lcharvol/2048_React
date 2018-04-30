import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import styled from 'styled-components';

import {
    GridContainer,
    FakeCell,
} from './styles'

const FakeGrid = ({ cells, player }) => (
    <GridContainer player={player.player}>
        {map(cell => <FakeCell key={cell.id} pos={cell.id + 1}/>, cells)}
    </GridContainer>
);

FakeGrid.propTypes = {
    cells: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired,
}

export default FakeGrid;