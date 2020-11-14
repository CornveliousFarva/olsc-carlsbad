import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutUs from './aboutus';
import Events from './events';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/events" component={Events} />
  </Switch>
)

export default Main;
