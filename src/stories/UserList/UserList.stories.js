import { Box, makeStyles } from '@material-ui/core';
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

  return (
      <Box className={classes.root} border={1}>
        <UserList filter="" selectedUser={selectedUser} onSelect={(user) => setSelectedUser(user)} />
      </Box>
  )
}