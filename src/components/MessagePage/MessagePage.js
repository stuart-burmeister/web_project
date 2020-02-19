import { useMutation, useQuery } from "@apollo/react-hooks";
import { Box, Grid, makeStyles } from "@material-ui/core";
import gql from "graphql-tag";
import React, { useState, useEffect } from "react";
import { MessageList, SearchBar } from "../";
import { MessageInput } from "./components";

const GET_USER_MESSAGES = gql`
query getMessages($email: String!) {
  getUser(email: $email) {
    messages{
      text
      date
      id
    }
  }
}
`;

const ADD_NEW_MESSAGE = gql`
mutation createMessage($user: String!, $text: String!) {
  createMessage(user: $user, text: $text)
}
`;

const useStyle = makeStyles(() => ({
  root: { width: "100%", height: "100%", flexDirection: "row",},
  panel: {  flex: 1, backgroundColor:"blue" },
  box: { flex:1, backgroundColor:"green" },
  input__panel: { flex: 1, padding: 20, color: "#979797" },
}))

const MessagePage = () => {
  const classes = useStyle();

  const [filter, setFilter] = useState("");
  const [messages, setMessages] = useState([]);

  const email = sessionStorage.getItem("currentUser");

  const { data, loading } = useQuery(GET_USER_MESSAGES, {
    variables: { email: email },
    onCompleted: data => {
    },
    onError: error => {
      alert(error)
    }
  });

  const [addMessage] = useMutation(
    ADD_NEW_MESSAGE,
    {
      onCompleted: data => {
      },
      onError: error => {
        alert(error)
      },
      refetchQueries: [{ query: GET_USER_MESSAGES, variables: { email: email } }]
    }
  );

  useEffect(() =>{
    if (data && data.getUser){
      setMessages(data.getUser.messages.filter((element) => element.text.toLowerCase().includes(filter.toLowerCase())));
    }
  }, [data, filter]);

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <Box className={classes.input__panel} borderBottom={1}>
            <MessageInput setMessage={(msg) => {
              const newMessage = { user: email, text: msg };
              addMessage({ variables: newMessage });
            }} />
          </Box>
          <Box className={classes.input__panel} borderBottom={1}>
            <SearchBar setFilter={(newFilter) => setFilter(newFilter)} />
          </Box>
          <Box>
            <MessageList messages={messages} email={email} maxHeight="67vh" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

};

export default MessagePage;
export { ADD_NEW_MESSAGE, GET_USER_MESSAGES };

