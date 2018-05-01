import React from 'react';
import { array, object, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventListener from 'react-event-listener';
import { map } from 'ramda';

import {
    Container,
    MainGridContainer,
    HiddenGridContainer,
    Map,
} from './styles';
import { move } from '../../actions/move';
import Grid from '../Grid';
import { getCells } from '../../selectors/cellsGrid';
import { getMap } from '../../selectors/map';

const propTypes = {
    cellsGrid: array,
    player: object,
    move: func.isRequired,
    mapItem: array,
}

const App = ({
    cellsGrid,
    move,
    player,
    mapItem,
}) => (
    <Map>
        <Container>
            <EventListener target={document} onKeyDown={move} />
            {map(grid => {
                if(grid.id === 4) {
                    return  (
                        <MainGridContainer key={grid.id} gridArea="grid_4">
                            <Grid cells={cellsGrid} player={player} color={grid.color} />
                        </MainGridContainer>
                    )
                } else {
                    return (
                        <HiddenGridContainer key={grid.id} gridArea={`grid_${grid.id}`}>
                            <Grid cells={grid.cellsGrid.cells} color={grid.color} />
                        </HiddenGridContainer>
                    )
                }
            }
            ,mapItem)}
        </Container>
    </Map>
);

App.propTypes = propTypes;

const actions = { move };

const mapStateToProps = state => ({
  cellsGrid: getCells(state),
  player: state.player,
  mapItem: getMap(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);