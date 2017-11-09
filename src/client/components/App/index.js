import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventListener from 'react-event-listener';
import { move } from '../../actions/move';
import PropTypes from 'prop-types';
import Grid from '../Grid';

const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex:1;
    width:100%;
    min-height:100vh;
    background-color:rgb(25,25,25);
`;

const Spacer = styled.div`
    position:relative;
    width:${({ width = '100%' }) => width};
    height:${({ height = 0 }) => height};
`;

const GridContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding:20px;
    border-radius: 4px;
    background-color:rgb(22,22,22);
    box-shadow: inset 15px 15px 20px rgba(15,15, 15, 0.5);
`;

const App = ({ cellsGrid1= [], cellsGrid2 = [], move, playerOne = {}, playerTwo = {} }) => {
    return (
        <Container>
            <EventListener target={document} onKeyDown={move} />
            <GridContainer>
                <Grid cells={cellsGrid1} player={playerOne}/>
                <Spacer height="25px"/>
                <Grid cells={cellsGrid2} player={playerTwo}/>
            </GridContainer>
        </Container>
    )
};

App.propTypes = {
    cellsGrid1: PropTypes.array,
    cellsGrid2: PropTypes.array,
    playerOne: PropTypes.object,
    playerTwo: PropTypes.object,
    move: PropTypes.func.isRequired,
}

const actions = { move };

const mapStateToProps = state => ({
  cellsGrid1: state.cellsGrid1,
  cellsGrid2: state.cellsGrid2,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);