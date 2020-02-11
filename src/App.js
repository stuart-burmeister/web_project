import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from "@material-ui/styles";
import {SignIn} from "./components";

function App() {
  return (
    <ThemeProvider>
      <SignIn>
        
      </SignIn>
    </ThemeProvider>

  );
}

export default App;
