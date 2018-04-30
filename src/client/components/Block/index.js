import React from 'react';
import {
    object,
} from 'prop-types';

import {
    BlockContainer,
    Texture,
} from './styles';

const propTypes = {
    cell: object.isRequired,
};

const Block = ({ cell, top, left }) => (
    <BlockContainer pos={cell.pos} top={top} left={left}>
        <Texture />
    </BlockContainer>
);

Block.propTypes = propTypes;

export default Block;