import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import { theme } from "./themes";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { NavView } from "./views"

function App() {

  //let history = useHistory("/main");
  return (
    <Router>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <NavView />
      </ThemeProvider>
    </Router>
  );
}

export default App;
