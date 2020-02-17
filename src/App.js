import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { theme } from "./themes";
import { NavView, SignInView } from "./views";

function App() {
  return (
    <Router>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <Route exact path="/" render={() => <Redirect to="/signin" />} />
        <SignInView />
        <NavView />
      </ThemeProvider>
    </Router>
  );
};

export default App;
