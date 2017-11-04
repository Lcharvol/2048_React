import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { map } from 'ramda';

const GridContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:400px;
    height:400px;
    border-radius:3px;
    background-color:#34495e;
`;

const GridInner = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: center;
    width:90%;
    height:90%;
    padding:5px;
    border-radius:3px;
    background-color:#2c3e50;
    box-shadow: inset 0px 12px 30px rgba(25,25,25, 0,9);
`;

const Grid = ({ cells }) => (
    <GridContainer>
        {console.log('map', map)}
        <GridInner>
            {console.log(cells)}
            {map(cell => <Cell key={cell}/>, cells)}
        </GridInner>
    </GridContainer>
);

Grid.propTypes = {
    cells: PropTypes.array.isRequired,
}
export default Grid;