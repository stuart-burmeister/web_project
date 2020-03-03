import { Box, makeStyles } from '@material-ui/core';
import React from "react";
import { MessageList } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    height: 300,
    width: 500,
  },
}));

export default {
  component: MessageList,
  title: "Message List",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  const email = sessionStorage.getItem("currentUser");

  return (
      <Box className={classes.root} border={1}>
        <MessageList email={email} />
      </Box>
  )
}