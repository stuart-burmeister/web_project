import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApolloProvider from './api/ApolloProvider';
import { theme } from "./themes";
import { NavView, SignInView, MainView } from "./views";

function App() {
  return (
    <ApolloProvider>
      <Router>
        <ThemeProvider theme={createMuiTheme(theme)}>
<MainView/>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
