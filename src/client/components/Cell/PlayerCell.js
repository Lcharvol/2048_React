import React from 'react';
import {
    string,
    bool,
} from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import { PlayerCellContainer } from './styles';

const propTypes = {
    color: string.isRequired,
    isBig: bool.isRequired,
};

const PlayerCell = ({
    color,
    pos,
    top,
    left,
    isBig,
}) => (
    <PlayerCellContainer
        color={color}
        top={top}
        left={left}
        pos={pos}
        isBig={isBig}
    />
);

PlayerCell.propTypes = propTypes;

export default compose(
    withStateHandlers(
        {
          isBig: false,
        },
        {
          handleChangePlayerSize: ({ isBig }) => () => ({ isBig: !isBig }),
        },
      ),
      lifecycle({
        componentDidMount() {
            setTimeout(() => {
                this.props.handleChangePlayerSize();
            }, 100);
        },
    }),
)(PlayerCell);