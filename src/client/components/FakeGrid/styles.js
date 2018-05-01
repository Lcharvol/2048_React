import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    position:absolute;
    width:${({ size }) => `${size}px`};
    height:${({ size }) => `${size}px`};
    grid-gap: 11px;
    padding:10px;
    grid-template-areas: ${({ template }) => template};
    z-index:50;
    background:  ${({ player }) => player === 1 ?
        'linear-gradient( 160deg, #92FFC0, #002661  120%)' :
        'linear-gradient( 160deg, #F05F57, #002661  120%)'
    };
    border-radius:3px;
    box-shadow: inset 12px 12px 30px rgba(25,25,25, 0.7);
`;

export const FakeCell = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(25,25,25,0.2);
    border-radius:2px;
    color:rgb(116,185,182);
    box-shadow: inset 4px 4px 4px rgba(0,0, 0,0.05);
    font-size:2em;
    grid-area: ${({ pos }) => `cell_${pos}`};
    border-radius: 13px;
    overflow: hidden;
`;