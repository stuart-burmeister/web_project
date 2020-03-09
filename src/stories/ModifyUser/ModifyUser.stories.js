import { Box, makeStyles } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import React from "react";
import { ModifyUser } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: 500,
    width: 500,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default {
  component: ModifyUser,
  title: "Modify User",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  const email = sessionStorage.getItem("currentUser");

  return (
    <Box border={1} className={classes.root}>
      <ModifyUser name={""} email={email ? email : ""} onCancel={() => action("Cancel Modify")()} />
    </Box>
  );
};