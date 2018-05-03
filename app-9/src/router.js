import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Details from './Details';

export default (
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/signup' component={Signup} />
    <Route path='/details' component={Details} />
  </Switch>
)