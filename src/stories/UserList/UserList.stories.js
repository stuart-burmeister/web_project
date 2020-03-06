import { Box, makeStyles } from '@material-ui/core';
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { UserList } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    height: 300,
    width: 500,
  },
}));

export default {
  component: UserList,
  title: "User List",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState(null)

  const onSelect = (user) => {
    setSelectedUser(user);
    action("select user")(user);
  }

  return (
    <Box className={classes.root} border={1}>
      <UserList filter="" selectedUser={selectedUser} onSelect={(user) => onSelect(user)} />
    </Box>
  )
}