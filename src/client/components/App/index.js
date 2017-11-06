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
	box-shadow: 10px 12px 12px black;
`;

const Title = styled.p`
    margin:0;
    font-size:10em;
    background:  linear-gradient( 160deg, #92FFC0, #002661  120%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const App = ({ cellsGrid1= [], cellsGrid2 = [], move }) => {
    return (
        <Container>
            <EventListener target={document} onKeyDown={move} />
            <Grid cells={cellsGrid1}/>
            <Grid cells={cellsGrid2}/>
        </Container>
    )
};

App.propTypes = {
    cellsGrid1: PropTypes.array.isRequired,
    cellsGrid2: PropTypes.array.isRequired,
    move: PropTypes.func.isRequired,
}

const actions = { move };

const mapStateToProps = state => ({
  cellsGrid1: state.cellsGrid1,
  cellsGrid2: state.cellsGrid2,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);