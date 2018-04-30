import React from 'react';
import { map } from 'ramda';
import {
    array,
    object,
} from 'prop-types';

import Cell from '../Cell';
import FakeGrid from '../FakeGrid';

import {
    GridContainer,
    GridInner,
} from './styles';

const propTypes = {
    cells: array.isRequired,
    player: object.isRequired,
}

const Grid = ({ cells, player }) => (
    <GridContainer>
        <GridInner>
            {map(cell => (
                <Cell key={cell.id} player={player} cell={cell} top={(Math.round((cell.pos - 2) / 4) * 90) + 10} left={((cell.pos % 4) * 90) + 10}/>
            ), cells)}
        </GridInner>
        <FakeGrid cells={cells} player={player}/>
    </GridContainer>
);

Grid.propTypes = propTypes;

export default Grid;