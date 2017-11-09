import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LifeBarContainer = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:440px;
    min-height:45px;
    margin: 15px;
    border-radius: 4px;
    background-color:rgb(22,22,22);
    box-shadow: inset 15px 15px 20px rgba(15,15, 15, 0.5);
`;

const LifeBarInner = styled.div`
    display:flex;
    width:420px;
    height:25px;
    background-color:${({ color }) => color};
    border-radius: 2px;
`;

const LifeBar = ({ player }) => (
    <LifeBarContainer>
        <LifeBarInner color={player.player === 1 ? '#2ecc71' : '#e74c3c'}/>
    </LifeBarContainer>
);

LifeBar.propTypes = {
    player: PropTypes.object.isRequired,
}

export default LifeBar;