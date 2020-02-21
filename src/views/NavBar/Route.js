import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
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
      <Route path="/signout" render={() => {
        sessionStorage.setItem('currentUser', null);
        return (<Box />);
      }} />
    </Switch>
  );
}

export default NavRoute;