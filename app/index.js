import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import ReactDOM from 'react-dom';
import React from 'react';

import configureStore from './Store/configureStore';
import App from './containers/App/App';

const firstWaffle = [
  {
    id: 0,
    color: '#EAA732',
  },
  {
    id: 1,
    color: '#EAA732',
  },
  {
    id: 2,
    color: '#EAA732',
  },
  {
    id: 3,
    color: '#EAA732',
  },
  {
    id: 4,
    color: '#EAA732',
  },
  {
    id: 5,
    color: '#EAA732',
  },
  {
    id: 6,
    color: '#EAA732',
  },
  {
    id: 7,
    color: '#EAA732',
  },
];

const secondWaffle = [
  {
    id: 0,
    color: '#EAA732',
  },
  {
    id: 1,
    color: '#EAA732',
  },
  {
    id: 2,
    color: '#EAA732',
  },
  {
    id: 3,
    color: '#EAA732',
  },
  {
    id: 4,
    color: '#EAA732',
  },
  {
    id: 5,
    color: '#EAA732',
  },
  {
    id: 6,
    color: '#EAA732',
  },
  {
    id: 7,
    color: '#EAA732',
  },
];

const store =
  configureStore({ firstWaffle: firstWaffle, secondWaffle: secondWaffle });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);