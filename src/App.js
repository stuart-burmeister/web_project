import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { SignUp, SignIn, NavBar } from "./components";
import { createMuiTheme } from '@material-ui/core';
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <NavBar/>
    </ThemeProvider>

  );
}

export default App;
