import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../pages/main';
import Welcome from '../pages/welcome'; 
import Admin from '../pages/admin';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
<IndexRoute component={Welcome} />
<Route path="admin" component={Admin} />
    </Route>
  </Router>
)