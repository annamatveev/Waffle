import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import React from 'react';

import configure from './store/configure';
import App from './components/App/App';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);