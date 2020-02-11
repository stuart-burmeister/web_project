import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { SignUp } from "./components";
import { createMuiTheme } from '@material-ui/core';
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <SignUp>

      </SignUp>
    </ThemeProvider>

  );
}

export default App;
