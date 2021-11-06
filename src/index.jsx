import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { initApp } from './actions';
import activityKeepAlive from './activityKeepAlive';

import App from './components/App';

import './index.css';

const store = configureStore();

store.dispatch(initApp());
activityKeepAlive();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
