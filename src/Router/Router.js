import React, { Component } from "react";
import Home from "../Component/Home";
import Login from "../Component/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
