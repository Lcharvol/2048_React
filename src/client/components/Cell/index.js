import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CellContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:#ecf0f1;
    border-radius:2px;
    color:rgb(116,185,182);
    box-shadow: 2px 2px 2px rgba(0,0, 0,0.2);
    font-size:2em;
`;

const Size = styled.p`
    margin:0;
`;

const Cell = ({ value }) => (
    <CellContainer>
        <Size>{value}</Size>
    </CellContainer>
);

Cell.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Cell;