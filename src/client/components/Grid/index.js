import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import FakeGrid from '../FakeGrid';
import { map } from 'ramda';

const GridContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:400px;
    height:400px;
    max-width:400px;
    max-height:400px;
    min-width:400px;
    min-height:400px;
    border-radius:4px;
    background: linear-gradient( 160deg, rgb(75,75,75), rgb(45,45,45) 120%);
    box-shadow: inset 12px 12px 30px rgba(25,25,25, 0.2);
`;

const GridInner = styled.div`
    display: grid;
    width:350px;
    height:350px;
    grid-gap: 11px;
    padding:10px;
    grid-auto-columns: minmax(22.5%, 22.5%);
    grid-auto-rows: minmax(22.5%, 22.5%);
    grid-template-areas: 'cell_0 cell_1 cell_2 cell_3' 'cell_4 cell_5 cell_6 cell_7'
    'cell_8 cell_9 cell_10 cell_11' 'cell_12 cell_13 cell_14 cell_15';
    z-index:100;
    transition: all 0.5s ease;
    border-radius:3px;
    box-shadow: 12px 12px 30px rgba(25,25,25, 0.9);
`;

const Grid = ({ cells }) => (
    <GridContainer>
        <GridInner>
            {map(cell => <Cell key={cell.id} cell={cell}/>, cells)}
        </GridInner>
        <FakeGrid cells={cells}/>
    </GridContainer>
);

Grid.propTypes = {
    cells: PropTypes.array.isRequired,
}
export default Grid;