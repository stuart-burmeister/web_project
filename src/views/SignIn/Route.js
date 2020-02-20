import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { SignIn, SignUp } from "../../components";

const SigninRoute = props => {
  const { isSignedIn, onSignIn } = props;
  let history = useHistory();
  return (
    <Switch>
      <Route path="/signin">
        <Box style={{ display: "flex", height: "100vh" }}>
          <SignIn onSignIn={() => {
            history.push("/main");
            onSignIn();
            }}
            onSignUpClick={() => history.push("/signup")} />
        </Box>
      </Route>
      <Route path="/signup">
        <Box style={{ display: "flex", height: "100vh" }}>
          <SignUp onSignUp={() => history.push("/signin")} onCancel={() => history.push("/signin")} />
        </Box>
      </Route>
      <Route path="/">
        <Redirect to="/signin"/>
      </Route>
    </Switch>
  );
};

SigninRoute.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default SigninRoute;