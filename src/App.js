import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import { SignIn } from "./components";
import { createMuiTheme } from '@material-ui/core';
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <SignIn>

      </SignIn>
    </ThemeProvider>

  );
}

export default App;
