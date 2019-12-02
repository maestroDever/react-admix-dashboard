import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from '../containers/Dashboard';

const Routes = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="dashboard" />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
