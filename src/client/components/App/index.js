import React from 'react';
import { array, object, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventListener from 'react-event-listener';
import { map, equals, findIndex, propEq } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import {
    Container,
    GridContainer,
    Map,
    Shadow,
} from './styles';
import { move } from '../../actions/move';
import { moveMap } from '../../actions/map';
import Grid from '../Grid';
import { getMap, getActiveGrid } from '../../selectors/map';
import { INITIAL_MAP_SIZE } from '../../MapGenerator/constants';
import { getMapTemplateAreas, getGridWidth, getMoveMapDirection } from '../../utils';

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
        <Container>
            <EventListener target={document} onKeyDown={move} />
            {map(grid => (
                    <GridContainer
                        key={grid.id}
                        position={grid.pos}
                        top={(Math.floor(grid.pos / Math.sqrt(INITIAL_MAP_SIZE)) * getGridWidth())}
                        left={((grid.pos % Math.sqrt(INITIAL_MAP_SIZE))) * getGridWidth()}
                    >
                            <Shadow
                                isActive={grid.active}
                            />
                            <Grid
                                cells={grid.cellsGrid.cells}
                                player={grid.active ? player : undefined}
                                color={grid.color}
                                gates={grid.gates}
                            />
                    </GridContainer>
                ),mapItem)}
        </Container>
    </Map>
);

App.propTypes = propTypes;

const actions = { move, moveMap };

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
        componentWillReceiveProps(props) {
            const { mapItem } = props;
            const activeMapPos = mapItem[findIndex(propEq('active', true))(mapItem)].pos;
            if(!equals(activeMapPos, Math.floor(INITIAL_MAP_SIZE / 2))) {
                this.props.moveMap(getMoveMapDirection(activeMapPos));
            }
        },
    }),
)(App);