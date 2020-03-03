import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import { addDecorator } from "@storybook/react";
import React from 'react';
import ApolloProvider from '../src/api/ApolloProvider';
import { theme } from "../src/themes";

addDecorator(storyFn => <ApolloProvider><ThemeProvider theme={createMuiTheme(theme)}>{storyFn()}</ThemeProvider></ApolloProvider>);