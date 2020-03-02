import { MockedProvider } from '@apollo/react-testing';
import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from "react";
import { SEARCH_USERS, UserList } from "../../components";

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

const mockData = [
  {
    request: {
      query: SEARCH_USERS,
      variables: {
      },
    },
    result: {
      data: {
        searchUser: [
          {username: "someone", email: "someone@gmail"},
          {username: "someoneelse", email: "someone@hotmail"},
          {username: "John", email: "john@gmail"},
          {username: "John777", email: "john@hotmail"},
          {username: "John", email: "john@naver"},
          {
            username: "JohnJacobJingleheimerSchmidtWithAReallyReallyLongName",
            email: "hisnameismynametoocausethisfieldislong@gmail"
          },
        ]
      },
    },
  },
];

export const Default = () => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <MockedProvider mocks={mockData} addTypename={false} >
      <Box className={classes.root} border={1}>
        <UserList filter="" selectedUser={selectedUser} onSelect={(user) => setSelectedUser(user)} />
      </Box>
    </MockedProvider>
  )
}