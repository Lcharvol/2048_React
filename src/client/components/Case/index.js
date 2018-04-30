import React from 'react';
import {
    object,
} from 'prop-types';

import {
    CaseContainer,
    Texture,
} from './styles';

const propTypes = {
    cell: object.isRequired,
};

const Case = ({ cell, top, left }) => (
    <CaseContainer pos={cell.pos} top={top} left={left}>
        <Texture />
    </CaseContainer>
);

Case.propTypes = propTypes;

export default Case;