import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Home from './pages/Home';
import Capitulo from './pages/Capitulo';
import Orientacao from './pages/Orientacao';
import Trajetoria from './pages/Trajetoria';
import Leitura from './pages/Leitura/';
import Questionario from './pages/Questionario';

function Router() {
  return (
    <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/capitulo"  component={Capitulo} /> 
        <Route path="/orientacao" component={Orientacao} /> 
        <Route path="/trajetoria" component={Trajetoria} /> 
        <Route path="/leitura" component={Leitura} /> 
        <Route path="/questionario" component={Questionario} /> 
    </Switch>
  );
}

export default Router;