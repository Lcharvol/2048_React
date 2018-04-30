import React from 'react';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadCellsGrid } from './actions/loadCells';
import { initPlayer } from './actions/initPlayers';
import { cellsGrid } from './data/initialMap';
import './index.css';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCellsGrid(cellsGrid));
store.dispatch(initPlayer());

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);