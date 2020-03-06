import { Box, makeStyles } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import React from "react";
import { SignIn } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    display:"flex",
    height: 400,
    width: 500,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default {
  component: SignIn,
  title: "Sign In",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  return (
    <Box border={1} className={classes.root}>
      <SignIn onSignIn={() => action("Signed In")()} onSignUpClick={() => action("Move to SignUp")()}/>
    </Box>
  );
};