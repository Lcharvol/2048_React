import React from 'react';
import { array, object, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventListener from 'react-event-listener';

import {
    Container,
    MainGridContainer,
    HiddenGridContainer,
    Map,
} from './styles';
import { move } from '../../actions/move';
import Grid from '../Grid';
import { getCells } from '../../selectors/cellsGrid';

const propTypes = {
    cellsGrid: array,
    player: object,
    move: func.isRequired,
}

const App = ({ cellsGrid, move, player }) => (
    <Map>
        <Container>
            <EventListener target={document} onKeyDown={move} />
            <HiddenGridContainer gridArea="grid_0">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <HiddenGridContainer gridArea="grid_1">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <HiddenGridContainer gridArea="grid_2">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <HiddenGridContainer gridArea="grid_3">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <MainGridContainer gridArea="grid_4">
                <Grid cells={cellsGrid} player={player}/>
            </MainGridContainer>
            <HiddenGridContainer gridArea="grid_5">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <HiddenGridContainer gridArea="grid_6">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <HiddenGridContainer gridArea="grid_7">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
            <HiddenGridContainer gridArea="grid_8">
                <Grid cells={cellsGrid} player={player}/>
            </HiddenGridContainer>
        </Container>
    </Map>
);

App.propTypes = propTypes;

const actions = { move };

const mapStateToProps = state => ({
  cellsGrid: getCells(state),
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);