import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Desarrollos from '../containers/Desarrollos';
import Dashboard from '../containers/Dashboard';
import Anuncios from '../containers/Anuncios';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/desarrollos' component={Desarrollos} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/anuncios' component={Anuncios} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
