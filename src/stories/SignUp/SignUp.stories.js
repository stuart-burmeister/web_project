import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { SignUp } from "../../components";
import { action } from "@storybook/addon-actions";

const useStyles = makeStyles(() => ({
  root: {
    display:"flex",
    height: 500,
    width: 500,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default {
  component: SignUp,
  title: "Sign Up",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  return (
    <Box border={1} className={classes.root}>
      <SignUp onSignUp={() => action("Signed Up Successfully")()} onCancel={() => action("Cancel Signup")()}/>
    </Box>
  );
};