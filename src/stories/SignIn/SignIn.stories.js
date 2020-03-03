import { Box, makeStyles } from "@material-ui/core";
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
      <SignIn onSignIn={() => console.log("Signed In")} onSignUpClick={() => console.log("Move to SignUp")}/>
    </Box>
  );
};