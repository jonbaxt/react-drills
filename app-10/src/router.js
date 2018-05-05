import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Products';
import Details from './Details';

export default (
<div>
    <Switch>
        <Route path='/' component={Products} exact />
        <Route patch='/details/:id' component={Details} />
    </Switch>
</div>
);