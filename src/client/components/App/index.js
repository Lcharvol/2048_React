import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '../Grid';

const Container = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    flex:1;
    width:100%;
    min-height:100vh;
    background-color:rgb(25,25,25);
	box-shadow: 10px 12px 12px black;
`;

const App = ({ cells }) => (
    <Container>
        <Grid cells={cells}/>
    </Container>
);

App.propTypes = {
    cells: PropTypes.array.isRequired,
}

const actions = {};

const mapStateToProps = state => ({
  cells: state.cells,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);