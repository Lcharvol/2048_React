import React from 'react';
import configureStore from './store';
import App from './components/App';
import { loadMap } from './actions/loadMap';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadMap());

export const root = (
  <App/>
);