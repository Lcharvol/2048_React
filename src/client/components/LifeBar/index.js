import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LifeBarContainer = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4px;
    width:400px;
    height:40px;
    background-color:rgb(25,25,25);
    box-shadow: 12px 12px 30px rgba(25,25,25, 0.4);
    background: url('https://i.pinimg.com/736x/b6/f7/97/b6f797a70b411b2d6c4481dac17a323a--d-texture-paint-texture.jpg');
    background-size: 220px 220px;
    background-repeat: repeat;
    box-shadow: 10px 10px 20px rgba(0,0,0, 0.4);
`;

const LifeBarInner = styled.div`
    position:relative;
    justify-content:flex-start;
    align-items:center;
    display:flex;
    width:370px;
    height:20px;
    border-radius: 2px;
    overflow:hidden;
    background-color:rgb(25,25,25);
`;

const Life = styled.div`
    display: flex;
    height:100%;
    width:${({ life }) => `${life * 10}%`};;
    background:  ${({ player }) => player === 1 ?
    'linear-gradient( 160deg, #69FF97, #92FFC0  120%)' :
    'linear-gradient( 160deg, #F6416C, #F05F57  100%)'
};
    border-radius:3px;
    transition: all 0.3s ease;
`;

const LifeBar = ({ player }) => (
    <LifeBarContainer >
        <LifeBarInner>
            <Life life={player.life} player={player.player}/>
        </LifeBarInner>
    </LifeBarContainer>
);

LifeBar.propTypes = {
    player: PropTypes.object.isRequired,
}

export default LifeBar;