import React from 'react';
import { array, object, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventListener from 'react-event-listener';
import { map } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import {
    Container,
    MainGridContainer,
    HiddenGridContainer,
    Map,
} from './styles';
import { move } from '../../actions/move';
import Grid from '../Grid';
import { getCells } from '../../selectors/cellsGrid';
import { getMap, getActiveGrid } from '../../selectors/map';
import { INITIAL_MAP_SIZE } from '../../MapGenerator/constants';
import { getMapTemplateAreas } from '../../utils';

const propTypes = {
    cellsGrid: array,
    player: object,
    move: func.isRequired,
    mapItem: array,
    displayMap: bool.isRequired,
}

const App = ({
    cellsGrid,
    move,
    player,
    mapItem,
    displayMap,
}) => (
    <Map displayMap={displayMap} >
        <Container template={getMapTemplateAreas()}>
            <EventListener target={document} onKeyDown={move} />
            {map(grid => {
                if(grid.id === 4) {
                    return  (
                        <MainGridContainer key={grid.id} gridArea={`grid_${Math.round(INITIAL_MAP_SIZE / 2) - 1}`}>
                            <Grid cells={cellsGrid} player={player} color={grid.color} />
                        </MainGridContainer>
                    )
                } else {
                    return (
                        <HiddenGridContainer key={grid.id} gridArea={`grid_${grid.id}`}>
                            <Grid cells={grid.cellsGrid.cells} color={grid.color} />
                        </HiddenGridContainer>
                    )
                }
            }
            ,mapItem)}
        </Container>
    </Map>
);

App.propTypes = propTypes;

const actions = { move };

const mapStateToProps = state => ({
  cellsGrid: getActiveGrid(state),
  player: state.player,
  mapItem: getMap(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStateHandlers(
        {
          displayMap: false,
        },
        {
          handleChangeDisplayMap: ({ displayMap }) => () => ({ displayMap: !displayMap }),
        },
      ),
      lifecycle({
        componentDidMount() {
          setTimeout(() => {
            this.props.handleChangeDisplayMap();
          }, 500);
        },
    }),
)(App);