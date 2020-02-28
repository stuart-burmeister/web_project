import React from "react";
import { addDecorator } from "@storybook/react";
import { theme } from "../src/themes";

import { muiTheme } from 'storybook-addon-material-ui';

addDecorator(muiTheme(theme));