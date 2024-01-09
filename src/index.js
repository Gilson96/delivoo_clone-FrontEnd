import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App'
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root'),
);

