import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { SignIn, SignUp } from "../../components";

const SigninRoute = props => {
  let history = useHistory();

  return (
    <Switch>
      <Route path="/signin">
        <SignIn onSignIn={() => history.push("/main")} onSignUp={() => history.push("/signup")} />
      </Route>
      <Route path="/signup">
        <SignUp onSignUp={() => history.push("/main")} onCancel={() => history.push("/signin")} />
      </Route>
    </Switch>
  );
};

export default SigninRoute;