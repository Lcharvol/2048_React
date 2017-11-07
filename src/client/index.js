import React from 'react';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadCellsGrids } from './actions/loadCells';
import { cellsGrid1, cellsGrid2 } from './data/initialMap';
import './index.css';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCellsGrids(cellsGrid1, cellsGrid1));

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);