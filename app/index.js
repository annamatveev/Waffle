import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import configureStore from './Store/configureStore';
import App from './containers/App/App';

const squares = [
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

const store = configureStore({ squares });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);