import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import { NavBar } from "./components";
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <NavBar />
    </ThemeProvider>

  );
}

export default App;
