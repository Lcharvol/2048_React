import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getColorCell } from '../../selectors';

const CellContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:#ecf0f1;
    border-radius:2px;
    box-shadow: 2px 2px 2px rgba(0,0, 0,0.2);
    font-size:2em;
    grid-area: ${({ pos }) => `cell_${pos}`};
`;

const Size = styled.p`
    margin:0;
    background: ${({ color }) => color};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const EmptyCell = styled.div`
`;

const Cell = ({ cell }) => {
    if (cell.value === 0) {
        return <EmptyCell/>
    }
    return (
        <CellContainer pos={cell.pos}>
            <Size color={getColorCell(cell.value)}>{cell.value}</Size>
        </CellContainer>
    )
};

Cell.propTypes = {
    cell: PropTypes.object.isRequired,
}

export default Cell;