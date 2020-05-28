import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import App from './routes/App';

// const { Pool } = require('pg');

// const configDB = {
//   user: 'postgres',
//   host: 'localhost',
//   password: 'arturo15922',
//   database: 'Dulceria',
// };
// const pool = new Pool(configDB);
const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
//El provider es el provedor de la aplicacion
//perimite transmitir la infromacion por este provider
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;
const store = createStore(reducer, preloadedState, composeEnhancers);

delete window.__PRELOADED_STATE__;
ReactDOM.hydrate(
  //El provider nos permite encapsular nuestros componentes
  //por medio de un conenct, el cual tiene toda la información del store transmitida a
  //estos componentes.
  <Provider store={store}>
    <Router history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById('app'));