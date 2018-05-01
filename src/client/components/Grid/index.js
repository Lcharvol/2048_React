import React from 'react';
import { map } from 'ramda';
import {
    array,
    object,
    string,
} from 'prop-types';

import Cell from '../Cell';
import FakeGrid from '../FakeGrid';
import { MAP_SIZE, CELL_SIZE, CELL_MARGIN } from '../../constants/map';
import { getGridTemplateAreas, getGridSize } from '../../utils';
import {
    GridContainer,
    GridInner,
} from './styles';

const propTypes = {
    cells: array.isRequired,
    player: object,
    color: string,
}

const Grid = ({ cells, player = {}, color}) => (
    <GridContainer size={getGridSize() + 50}>
        <GridInner template={getGridTemplateAreas()} size={getGridSize()}>
            {map(cell => (
                <Cell
                    key={cell.id}
                    player={player}
                    cell={cell}
                    top={(Math.round((cell.pos - 2) / MAP_SIZE) * (CELL_SIZE + CELL_MARGIN)) + 10}
                    left={((cell.pos % MAP_SIZE) * (CELL_SIZE + CELL_MARGIN)) + 10}
                />
            ), cells)}
        </GridInner>
        <FakeGrid cells={cells} player={player} color={color} />
    </GridContainer>
);

Grid.propTypes = propTypes;

export default Grid;