import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getColorCell } from '../../selectors';
import Case from '../Case';

const CellContainer = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:#ecf0f1;
    border-radius:2px;
    box-shadow: 1px 1px 25px rgba(163, 235, 12, 0.4);
    font-size:2em;
    width:80px;
    height:80px;

    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    transition: all 0.1s ease;
    background: url('https://thumbs.dreamstime.com/z/wooden-buttons-set-game-ui-vector-cartoon-illustrations-wood-button-texture-interface-94303418.jpg');
    background-size: 730%;
    background-position: 235px 282px;
    border-radius: 13px;
    overflow: hidden;
`;

const EmptyCell = styled.div`
`;

const Texture = styled.div`
    width:100%;
    height:100%;
`;

const Cell = ({ cell, top, left }) => {
    if (cell.value === 0) {
        return <EmptyCell/>
    }
    if (cell.value === -1) {
        return <Case cell={cell} pos={cell.pos} top={top} left={left}/>
    }
    return (
        <CellContainer pos={cell.pos} top={top} left={left}>
            <Texture />
        </CellContainer>
    )
};

Cell.propTypes = {
    cell: PropTypes.object.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
}

export default Cell;