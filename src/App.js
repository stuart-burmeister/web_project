import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import { NavBar } from "./components";
import { theme } from "./themes";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

function App() {

  //let history = useHistory("/main");
  return (
    <Router>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <NavBar />
      </ThemeProvider>
    </Router>

  );
}

export default App;
