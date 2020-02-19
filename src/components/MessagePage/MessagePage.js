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

const useStyle = makeStyles(() => ({
  root: { width: "100%", height: "100%", flexDirection: "row", },
  panel: { flex: 1, },
  box: { flex: 1, },
  input__panel: { flex: 1, padding: 20, color: "#979797" },
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

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <Box className={classes.input__panel} borderBottom={1}>
            <MessageInput setMessage={(msg) => {
              const newMessage = { user: email, text: msg };
              if (!msg){
                return;
              }
              addMessage({ variables: newMessage });
            }} />
          </Box>
          <Box className={classes.input__panel} borderBottom={1}>
            <SearchBar setFilter={(newFilter) => setFilter(newFilter)} />
          </Box>
          <Box>
            <MessageList email={email} filter={filter} maxHeight="67vh" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

};

export default MessagePage;
export { ADD_NEW_MESSAGE };

