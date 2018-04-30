import styled from 'styled-components'

export const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex:1;
    width:100%;
    min-height:100vh;
    background-color:rgb(25,25,25);
`;

export const Spacer = styled.div`
    position:relative;
    width:${({ width = '20px' }) => width};
    height:${({ height = 0 }) => height};
`;

export const PlayersContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding:20px;
    border-radius: 4px;
    background-color:rgb(22,22,22);
    box-shadow: inset 15px 15px 20px rgba(15,15, 15, 0.5);
`;

export const PlayerContainer = styled.div`
`;