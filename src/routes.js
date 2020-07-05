import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Home from './pages/Home';
import Capitulo from './pages/Capitulo';
import Orientacao from './pages/Orientacao';
import Trajetoria from './pages/Trajetoria';
import Leitura from './pages/Leitura/';

function Router() {
  return (
    <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/capitulo"  component={Capitulo} /> 
        <Route path="/orientacao" component={Orientacao} /> 
        <Route path="/trajetoria" component={Trajetoria} /> 
        <Route path="/leitura" component={Leitura} /> 
    </Switch>
  );
}

export default Router;