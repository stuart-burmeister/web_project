import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { SignIn, SignUp } from "../../components";
import { Box } from "@material-ui/core";

const SigninRoute = props => {
  let history = useHistory();

  return (
    <Switch>
      <Route path="/signin">
        <Box style={{display: "flex", height: "100vh"}}>
          <SignIn onSignIn={() => history.push("/main")} onSignUpClick={() => history.push("/signup")} />
        </Box>
      </Route>
      <Route path="/signup">
        <Box style={{display: "flex", height: "100vh"}}>
          <SignUp onSignUp={() => history.push("/main")} onCancel={() => history.push("/signin")} />
        </Box>
      </Route>
    </Switch>
  );
};

export default SigninRoute;