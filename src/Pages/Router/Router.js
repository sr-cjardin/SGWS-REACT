import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import { Home } from '../Home';
import { Portfolio } from '../Portfolio';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
  </Switch>
);

export { Router };
