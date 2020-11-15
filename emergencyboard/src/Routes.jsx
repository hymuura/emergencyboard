import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './views/login';
import EmergencyStatusBoard from './views/emergency-status-board';
import NotFound from "./views/not-found";

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            Welcome
          </Route>
          <Route component={Login} exact path="/login" />
          <Route component={EmergencyStatusBoard} exact path="/status" />
          <Route component={NotFound} exact path="/not-found" />
        </Switch>
      </Router>
    );
}

export default Routes;