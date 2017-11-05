import React from 'react';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadCells} from './actions/loadCells';
import { cells } from './data/initialMap';
import './index.css';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCells(cells));

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);