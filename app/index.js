import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import configureStore from './Store/configureStore';
import App from './containers/App/App';

const squares = [
  {
    id: '1',
    color: '#ff0000',
  },
  {
    id: '2',
    color: '#000000',
  },
  {
    id: '3',
    color: '#ff0000',
  },
  {
    id: '4',
    color: '#000000',
  },
];

const store = configureStore({ squares });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);