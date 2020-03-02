import { MockedProvider } from '@apollo/react-testing';
import { Box, makeStyles } from '@material-ui/core';
import React from "react";
import { GET_USER_MESSAGES, MessageList } from "../../components";

const useStyles = makeStyles(theme => ({
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

const mockData = [
  {
    request: {
      query: GET_USER_MESSAGES,
      variables: {
        email: 'test@testmail.com',
      },
    },
    result: {
      data: {
        getUser: {
          messages: [
            { text: "This is an example message.", date: "2020/01/03", id: "1" },
            { text: "This should be the first message.", date: "2020/01/01", id: "2" },
            { text: "This is another example message.", date: "2020/01/04", id: "4" },
            { text: "This is another example message.", date: "2020/01/05", id: "5" },
            { text: "This is an overflow message.", date: "2020/01/06", id: "6" },
            { text: "This is another overflow message.", date: "2020/01/06", id: "7" },
            { text: "This is another overflow message.", date: "2020/01/06", id: "8" },
          ],
        }
      },
    },
  },
];

export const Default = () => {
  const classes = useStyles();
  return (
    <MockedProvider mocks={mockData} addTypename={false} >
      <Box className={classes.root} border={1}>
        <MessageList email="test@testmail.com" />
      </Box>
    </MockedProvider>
  )
}