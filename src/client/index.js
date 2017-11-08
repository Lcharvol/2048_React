import React from 'react';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadCellsGrids } from './actions/loadCells';
import { initPlayers } from './actions/initPlayers';
import { cellsGrid1, cellsGrid2 } from './data/initialMap';
import './index.css';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCellsGrids(cellsGrid1, cellsGrid2));
store.dispatch(initPlayers());

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);