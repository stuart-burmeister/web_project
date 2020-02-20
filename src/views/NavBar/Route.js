import PropTypes from "prop-types";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MainPage, MessagePage, NavBar, UserPage } from "../../components";

const NavRoute = props => {
  const { isSignedIn, onSignOut } = props;
  return (
    <Switch>
      <Route path="/main">
        {
        !isSignedIn ? <Redirect to="/signin" /> :
          <NavBar tabIndex={0}>
            <MainPage />
          </NavBar>
        }
      </Route>
      <Route path="/user">
        {
          !isSignedIn ? <Redirect to="/signin" /> :
            <NavBar tabIndex={1}>
              <UserPage />
            </NavBar>
        }
      </Route>
      <Route path="/message">
        {
          !isSignedIn ? <Redirect to="/signin" /> :
            <NavBar tabIndex={2}>
              <MessagePage />
            </NavBar>
        }
      </Route>
      <Route path="/signout" render={() => {
        sessionStorage.setItem('currentUser', null);
        onSignOut();
        return (<div />);
      }} />
      <Route path="/">
        <Redirect to="/main"/>
      </Route>
    </Switch>
  );
}

NavRoute.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default NavRoute;