import { addDecorator } from "@storybook/react";
import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';
import ApolloProvider from '../src/api/ApolloProvider';
import { theme } from "../src/themes";

addDecorator(storyFn => <ApolloProvider>{storyFn()}</ApolloProvider>);
addDecorator(muiTheme(theme))