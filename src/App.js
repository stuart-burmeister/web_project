import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApolloProvider from './api/ApolloProvider';
import { theme } from "./themes";
import { NavView, SignInView } from "./views";

function App() {
  const [isSignedIn, setSignedIn] = useState(sessionStorage.getItem("isSignedIn"))
  return (
    <ApolloProvider>
      <Router>
        <ThemeProvider theme={createMuiTheme(theme)}>
          <SignInView isSignedIn={isSignedIn} onSignIn={() =>setSignedIn(true)}/>
          <NavView isSignedIn={isSignedIn}/>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
