import { Box } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { SignIn, SignUp } from "../../components";

const SigninRoute = () => {
  let history = useHistory();
  const isSignedIn = sessionStorage.getItem('isSignedIn');
  return (
    <Switch>
      {
        isSignedIn &&
        <Route path="/" render={() =>  <Redirect to="/main" />}/>
      }
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route path="/signin">
        <Box style={{display: "flex", height: "100vh"}}>
          <SignIn onSignIn={() => history.push("/main")} onSignUpClick={() => history.push("/signup")} />
        </Box>
      </Route>
      <Route path="/signup">
        <Box style={{display: "flex", height: "100vh"}}>
          <SignUp onSignUp={() => history.push("/signin")} onCancel={() => history.push("/signin")} />
        </Box>
      </Route>
    </Switch>
  );
};

export default SigninRoute;