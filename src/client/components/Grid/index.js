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
    min-width:400px;
    min-height:400px;
    border-radius:3px;
    background-color:#ecf0f1;
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
    background-color:#bdc3c7;
    background: linear-gradient( 160deg, #92FFC0, #002661  120%);
    box-shadow: inset 12px 12px 30px rgba(25,25,25, 0,9);
`;

const Grid = ({ cells }) => (
    <GridContainer>
        <GridInner>
            {map(cell => <Cell key={cell.value} value={cell.value}/>, cells)}
        </GridInner>
    </GridContainer>
);

Grid.propTypes = {
    cells: PropTypes.array.isRequired,
}
export default Grid;