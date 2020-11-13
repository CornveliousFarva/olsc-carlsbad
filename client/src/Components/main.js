import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Events from './Events';
import Pics from './Pics';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/events" component={Events} />
    <Route path="/pics" component={Pics} />
  </Switch>
)

export default Main;