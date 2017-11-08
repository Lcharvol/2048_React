import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    position:absolute;
    width:350px;
    height:350px;
    grid-gap: 11px;
    padding:10px;
    grid-auto-columns: minmax(22.5%, 22.5%);
    grid-auto-rows: minmax(22.5%, 22.5%);
    grid-template-areas: 'cell_1 cell_2 cell_3 cell_4' 'cell_5 cell_6 cell_7 cell_8'
    'cell_9 cell_10 cell_11 cell_12' 'cell_13 cell_14 cell_15 cell_16';
    z-index:50;
    background: linear-gradient( 160deg, #92FFC0, #002661  120%);
    border-radius:3px;
    box-shadow: inset 12px 12px 30px rgba(25,25,25, 0.7);
`;

const FakeCell = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:rgba(25,25,25,0.2);
    border-radius:2px;
    color:rgb(116,185,182);
    box-shadow: inset 4px 4px 4px rgba(0,0, 0,0.05);
    font-size:2em;
    grid-area: ${({ pos }) => `cell_${pos}`};
    border-radius: 13px;
    overflow: hidden;
`;

const FakeGrid = ({ cells }) => (
    <GridContainer>
        {map(cell => <FakeCell key={cell.id} pos={cell.id + 1}/>, cells)}
    </GridContainer>
);

FakeGrid.propTypes = {
    cells: PropTypes.array.isRequired,
}

export default FakeGrid;