/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRouter';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';
import router from './routes/productos';

const bodyParser = require('body-parser');

const app = express();
dotenv.config();

const { ENV, PORT } = process.env;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else { //esto es para cuando ya quieres mandarlo a produccion bro
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
};
//se elige el tipo de ruta que vamosa a llamar
//it's a http protocol bro
const setResponse = (html, preloadedState) => {
  return (` 
  <!DOCTYPE html>
  <html>
      <head>
      <link rel="stylesheet" href="assets/app.css" type="text/css">
         <title>Dulcería</title>
      </head>
      <body>
          <div id="app">${html}</div>
          <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="assets/app.js" type="text/javascript"></script>
      </body>
  </html>
  `);
};
const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState));
};
app.use(bodyParser.json());
app.use('/', router);
app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server runing on port ${PORT}`);
});