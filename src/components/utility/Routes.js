import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import ShapesIndex from '../shapes/ShapesIndex';
import ShapesShow from '../shapes/ShapesShow';
import ShapesSubmit from '../shapes/ShapesSubmit';
import UsersIndex from '../users/UsersIndex';
import UsersShow from '../users/UsersShow';
import RunsShow from '../runs/RunsShow';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/shapes" component={ShapesIndex} />
      <ProtectedRoute path="/shapes/:id/submit" component={ShapesSubmit} />
      <ProtectedRoute path="/shapes/:id" component={ShapesShow} />
      <ProtectedRoute path="/users/:id" component={UsersShow} />
      <ProtectedRoute path="/users" component={UsersIndex} />
      <ProtectedRoute path="/runs/:id" component={RunsShow} />
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
