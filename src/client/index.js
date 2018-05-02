import React from 'react';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';
import { initPlayer } from './actions/initPlayers';
import { getInitialMap } from './actions/map';
import './index.css';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(initPlayer());
store.dispatch(getInitialMap());

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);