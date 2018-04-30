import React from 'react';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadCellsGrid } from './actions/loadCellsGrid';
import { initPlayer } from './actions/initPlayers';
import { generateNewCells } from './RoomGenerator/generate';
import './index.css';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCellsGrid(generateNewCells()));
store.dispatch(initPlayer());

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);