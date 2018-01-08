import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { fromJS } from 'immutable';

import configureStore from './Store/configureStore';
import App from './containers/App/App';

const squares = {
  '0': {
    id: '0',
    color: '#EAA732',
  },
  '1': {
    id: '1',
    color: '#EAA732',
  },
  '2': {
    id: '2',
    color: '#EAA732',
  },
  '3': {
    id: '3',
    color: '#EAA732',
  },
  '4': {
    id: '4',
    color: '#EAA732',
  },
  '5': {
    id: '5',
    color: '#EAA732',
  },
  '6': {
    id: '6',
    color: '#EAA732',
  },
  '7': {
    id: '7',
    color: '#EAA732',
  },
    };

const store = configureStore(fromJS({ grid: { squares:  ['0','1','2','3','4','5','6','7'] }, squares: squares }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);