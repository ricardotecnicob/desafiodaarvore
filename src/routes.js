import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Home from './pages/Home';
import Capitulo from './pages/Capitulo';
import Orientacao from './pages/Orientacao';
import Rank from './pages/Rank';

function Router() {
  return (
    <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/capitulo"  component={Capitulo} /> 
        <Route path="/orientacao" component={Orientacao} /> 
        <Route path="/rank" component={Rank} /> 
    </Switch>
  );
}

export default Router;