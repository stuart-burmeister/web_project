import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { SignUp } from "../../components";

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
      <SignUp onSignUp={() => console.log("Signed Up")} onCancel={() => console.log("Cancel Signup")}/>
    </Box>
  );
};