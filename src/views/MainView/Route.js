import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import { MainPage, MessagePage, NavBar, UserPage, SignIn, SignUp } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "calc(100vh - 8px)",
    width: "calc(100vw - 8px)",
  },
}));

const MainRoute = () => {
  const classes = useStyles();

  const [isSignedIn, setIsSignedIn] = useState(sessionStorage.getItem("currentUser") !== null);
  const history = useHistory();

  return (
    <Switch>
      <Route path="/main">
        {
          isSignedIn ? (
            <NavBar tabIndex={0}>
              <MainPage />
            </NavBar>) :
            (
              <Redirect to="/signin" />
            )}
      </Route>
      <Route path="/user">
        {
          isSignedIn ? (
            <NavBar tabIndex={1}>
              <UserPage />
            </NavBar>) :
            (
              <Redirect to="/signin" />
            )}
      </Route>
      <Route path="/message">
        {
          isSignedIn ? (
            <NavBar tabIndex={2}>
              <MessagePage />
            </NavBar>) :
            (
              <Redirect to="/signin" />
            )}
      </Route>
      <Route path="/logout" render={() => {
        sessionStorage.removeItem('currentUser');
        setIsSignedIn(false);
        return (<Redirect to="/signin" from="/logout" />);
      }} />
      <Route path="/signin">
        {
          isSignedIn ? (<Redirect to="/main" />) : (
            <Box className={classes.root}>
              <SignIn onSignIn={() => {
                setIsSignedIn(true);
                history.push("/main")
              }}
                onSignUpClick={() => history.push("/signup")} />
            </Box>
          )
        }
      </Route>
      <Route path="/signup">
        {
          isSignedIn ? (<Redirect to="/main" />) : (
            <Box className={classes.root}>
              <SignUp onSignUp={() => history.push("/signin")} onCancel={() => history.push("/signin")} />
            </Box>
          )
        }
      </Route>
      <Route path="/">
        <Redirect to={isSignedIn ? "/main" : "/signin"} />
      </Route>
    </Switch>
  );
}

export default MainRoute;