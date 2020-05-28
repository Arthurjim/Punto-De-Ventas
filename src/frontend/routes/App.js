import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Ventas from '../containers/Ventas';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Inventario from '../containers/Inventario';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/ventas" component={Ventas} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/inventario" component={Inventario} />
      <Route exact path="/registro" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
