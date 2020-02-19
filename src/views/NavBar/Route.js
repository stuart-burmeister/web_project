import PropTypes from "prop-types";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MainPage, MessagePage, NavBar, UserPage } from "../../components";

const NavRoute = props => {
  const { isSignedIn } = props;
  return (
    <Switch>
      {
        !isSignedIn &&
        <Route path="/" render={() => <Redirect to="/signin" />} />
      }
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
    </Switch>
  );
}

NavRoute.propTypes = {
  isSignedIn: PropTypes.string.isRequired,
};

export default NavRoute;