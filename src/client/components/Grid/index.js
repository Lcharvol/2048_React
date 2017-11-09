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
    background-color:rgb(25,25,25);
    box-shadow: 12px 12px 30px rgba(25,25,25, 0.4);
    background: url('https://i.pinimg.com/736x/b6/f7/97/b6f797a70b411b2d6c4481dac17a323a--d-texture-paint-texture.jpg');
    background-size: 220px 220px;
    background-repeat: repeat;
    box-shadow: 10px 10px 20px rgba(0,0,0, 0.4);
`;

const GridInner = styled.div`
    position:relative;
    display: grid;
    width:350px;
    height:350px;
    grid-gap: 11px;
    padding:10px;
    z-index:100;
    transition: all 0.5s ease-in;
    border-radius:3px;
    box-shadow: inset 15px 15px 15px rgba(25,25,25, 0.3);
`;

const Grid = ({ cells, player }) => (
    <GridContainer>
        <GridInner>
            {map(cell => (
                <Cell key={cell.id} player={player} cell={cell} top={(Math.round((cell.pos - 2) / 4) * 90) + 10} left={((cell.pos % 4) * 90) + 10}/>
            ), cells)}
        </GridInner>
        <FakeGrid cells={cells} player={player}/>
    </GridContainer>
);

Grid.propTypes = {
    cells: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired,
}
export default Grid;