import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MainPage, MessagePage, NavBar, UserPage } from "../../components";

const NavRoute = () => {
  return (
    <Switch>
      <Route path="/main">
        <NavBar tabIndex={0}>
          <MainPage />
        </NavBar>
      </Route>
      <Route path="/user">
        <NavBar tabIndex={1}>
          <UserPage />
        </NavBar>
      </Route>
      <Route path="/message">
        <NavBar tabIndex={2}>
          <MessagePage />
        </NavBar>
      </Route>
      <Route path="/logout" render={() => {
        sessionStorage.setItem('currentUser', null);
        return (<Redirect to="/signin" from="/logout"/>);
      }} />
    </Switch>
  );
}

export default NavRoute;