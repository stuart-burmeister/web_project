import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { SignIn, SignUp } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
  },
}));

const SigninRoute = () => {
  const classes = useStyles();

  let history = useHistory();
  return (
      <Switch>
          <Route path="/signin">
            <Box className={classes.root}>
              <SignIn onSignIn={() => history.push("/main") }
                onSignUpClick={() => history.push("/signup")} />
            </Box>
          </Route>
          <Route path="/signup">
            <Box className={classes.root}>
              <SignUp onSignUp={() => history.push("/signin")} onCancel={() => history.push("/signin")} />
              </Box>
          </Route>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
      </Switch>

  );
};

export default SigninRoute;