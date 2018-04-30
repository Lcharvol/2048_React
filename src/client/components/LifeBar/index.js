import React from 'react';
import {
    object,
} from 'prop-types';

import {
    LifeBarContainer,
    LifeBarInner,
    Life,
} from './styles';

const propTypes = {
    player: PropTypes.object.isRequired,
}

const LifeBar = ({ player }) => (
    <LifeBarContainer >
        <LifeBarInner>
            <Life life={player.life} player={player.player}/>
        </LifeBarInner>
    </LifeBarContainer>
);

LifeBar.propTypes = propTypes;

export default LifeBar;