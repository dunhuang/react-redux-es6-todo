import 'babel-polyfill';
import './css/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './core/store';
import Root from './components/root';

const store = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');


ReactDOM.render(
  <AppContainer>
    <Root
      history={syncedHistory}
      store={store}
    />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(require('./components/root').default);
  });
}

