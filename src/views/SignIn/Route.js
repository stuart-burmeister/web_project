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
    <Box className={classes.root}>
      <Switch>
        <Route path="/signin">
          <SignIn onSignIn={() => history.push("/main") }
            onSignUpClick={() => history.push("/signup")} />
        </Route>
        <Route path="/signup">
          <SignUp onSignUp={() => history.push("/signin")} onCancel={() => history.push("/signin")} />
        </Route>
        <Route path="/">
          <Redirect to="/signin" />
        </Route>
      </Switch>
    </Box>

  );
};

export default SigninRoute;