import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Home from './pages/Home';
import Capitulo from './pages/Capitulo';
import Orientacao from './pages/Orientacao';
import Rank from './pages/Rank';
import Trajetoria from './pages/Trajetoria';
import Leitura from './pages/Leitura/';
import Questionario from './pages/Questionario';

function Router() {
  return (
    <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/capitulo"  component={Capitulo} /> 
        <Route path="/orientacao" component={Orientacao} /> 
        <Route path="/rank" component={Rank} /> 
        <Route path="/trajetoria" component={Trajetoria} /> 
        <Route path="/leitura" component={Leitura} /> 
        <Route path="/questionario" component={Questionario} />

        {/* <Route path="*" component={Erro} /> */}


    </Switch>
  );
}

export default Router;