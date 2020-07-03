import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Capitulo from './pages/Capitulo';
import Orientacao from './pages/Orientacao';

function Router() {
  return (
    <Switch>
        <Route path="/capitulo" exact component={Capitulo} /> 
        <Route path="/orientacao" component={Orientacao} /> 
    </Switch>
  );
}

export default Router;