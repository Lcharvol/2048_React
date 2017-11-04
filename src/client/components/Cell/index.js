import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:#cdc0b0;
    border-radius:2px;
`;

const Cell = () => (
    <CellContainer>
        <p>0</p>
    </CellContainer>
);

export default Cell;