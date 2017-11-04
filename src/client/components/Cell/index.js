import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:rgb(145,145,145);
    border-radius:2px;
    COLOR:white;
`;

const Cell = () => (
    <CellContainer>
        <p>0</p>
    </CellContainer>
);

export default Cell;