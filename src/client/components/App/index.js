import React from 'react';
import { array, object, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventListener from 'react-event-listener';

import {
    Container,
    PlayersContainer,
    PlayerContainer,
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
    <Container>
        <EventListener target={document} onKeyDown={move} />
        <PlayersContainer>
            <PlayerContainer>
                <Grid cells={cellsGrid} player={player}/>
            </PlayerContainer>
        </PlayersContainer>
    </Container>
);

App.propTypes = propTypes;

const actions = { move };

const mapStateToProps = state => ({
  cellsGrid: getCells(state),
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);