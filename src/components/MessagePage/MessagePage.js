import { useMutation } from "@apollo/react-hooks";
import { Box, Grid, makeStyles } from "@material-ui/core";
import gql from "graphql-tag";
import React, { useState } from "react";
import { GET_USER_MESSAGES, MessageList, SearchBar } from "../";
import { MessageInput } from "./components";

const ADD_NEW_MESSAGE = gql`
mutation createMessage($user: String!, $text: String!) {
  createMessage(user: $user, text: $text)
}
`;

const useStyle = makeStyles(theme => ({
  root: {
    width: "calc(100vw - 130px)",
    height: "calc(100vh - 50px)",
    flexDirection: "row",
  },
  panel: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  box: {
    height: "100%",
    width: "100%",
    borderColor: theme.palette.secondary.main,
  },
  input__panel: {
    flex: 1,
    height: "60px",
    width: "calc(100% - 40px)",
    padding: 20,
    color: theme.palette.secondary.main,
  },
  message__panel: {
    height: "calc( 100% - 202px)",
  }
}))

const MessagePage = () => {
  const classes = useStyle();

  const [filter, setFilter] = useState("");

  const email = sessionStorage.getItem("currentUser");

  const [addMessage, { loading: msgLoading }] = useMutation(
    ADD_NEW_MESSAGE,
    {
      onCompleted: data => {
      },
      onError: error => {
        alert(`Adding message failed: ${error.message}`)
      },
      refetchQueries: [{ query: GET_USER_MESSAGES, variables: { email: email } }],
      awaitRefetchQueries: true,
    }
  );

  const isLoading = msgLoading;

  return (
    <Box className={classes.root}>
      <Grid className={classes.root} container>
        <Grid className={classes.panel} item>
          <Box className={classes.box} border={1}>
            <Box className={classes.input__panel} borderBottom={1}>
              <MessageInput isLoading={isLoading} setMessage={(msg) => {
                const newMessage = { user: email, text: msg };
                if (!msg) {
                  return;
                }
                addMessage({ variables: newMessage });
              }} />
            </Box>
            <Box className={classes.input__panel} borderBottom={1}>
              <SearchBar setFilter={(newFilter) => setFilter(newFilter)} />
            </Box>
            <Box className={classes.message__panel}>
              <MessageList email={email} filter={filter} heightOffset={244} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessagePage;
export { ADD_NEW_MESSAGE };

