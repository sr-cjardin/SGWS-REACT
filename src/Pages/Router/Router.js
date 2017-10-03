import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import { Home } from '../Home';
import { Portfolio } from '../Portfolio';
import { Suppliers } from '../Suppliers';
import { Careers } from '../Careers';
import { OurCauses } from '../OurCauses';
import { News } from '../News';
import { AboutUs } from '../AboutUs';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/suppliers" component={Suppliers} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/our-causes" component={OurCauses} />
    <Route exact path="/news" component={News} />
    <Route exact path="/about-us" component={AboutUs} />
  </Switch>
);

export { Router };
