import React from 'react';
import caseIcon from '../../../images/case.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CaseContainer = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:22%;
    min-height:22%;
    background-color:#ecf0f1;
    border-radius:2px;
    box-shadow: 2px 2px 2px rgba(0,0, 0,0.2);
    font-size:2em;
    width:80px;
    height:80px;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    transition: all 0.1s ease;
    background: url(${caseIcon});
    background-size: 103%;
    background-position: 0px 0px;
    border-radius: 13px;
`;

const Texture = styled.div`
    width:100%;
    height:100%;
`;

const Case = ({ cell, top, left }) => (
    <CaseContainer pos={cell.pos} top={top} left={left}>
        <Texture />
    </CaseContainer>
);

Case.propTypes = {
    cell: PropTypes.object.isRequired,
}

export default Case;