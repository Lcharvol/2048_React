import styled from 'styled-components';

export const GridContainer = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width:${({ size }) => size}px;
    height:${({ size }) => size}px;
    border-radius:4px;
    background-color:rgb(25,25,25);
    box-shadow: 12px 12px 30px rgba(25,25,25, 0.4);
    background: url('https://i.pinimg.com/736x/b6/f7/97/b6f797a70b411b2d6c4481dac17a323a--d-texture-paint-texture.jpg');
    background-size: 220px 220px;
    background-repeat: repeat;
    box-shadow: 10px 10px 20px rgba(0,0,0, 0.4);
`;

export const GridInner = styled.div`
    position:relative;
    width:${({ size }) => size}px;
    height:${({ size }) => size}px;
    padding:10px;
    z-index:100;
    transition: all 0.5s ease-in;
    border-radius:3px;
    box-shadow: inset 15px 15px 15px rgba(25,25,25, 0.3);
`;