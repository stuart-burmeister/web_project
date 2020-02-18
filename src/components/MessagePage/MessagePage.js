import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { MessageList, SearchBar } from "../";
import { MessageInput } from "./components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const messageDummy = [
  { id: 1, date: "2020/03/03", text: "Hello. this message is from the future." },
  { id: 2, date: "1066/11/02", text: "Salutations! This message is from the past." },
  { id: 3, date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { id: 4, date: "2020/03/03", text: "Hello. this message is from the future." },
  { id: 5, date: "1066/11/02", text: "Salutations! This message is from the past." },
  { id: 6, date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { id: 7, date: "2020/03/03", text: "Hello. this message is from the future." },
  { id: 8, date: "1066/11/02", text: "Salutations! This message is from the past." },
  { id: 9, date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { id: 10, date: "2020/03/03", text: "Hello. this message is from the future." },
  { id: 11, date: "1066/11/02", text: "Salutations! This message is from the past." },
  { id: 12, date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { id: 13, date: "2020/03/03", text: "Hello. this message is from the future." },
  { id: 14, date: "1066/11/02", text: "Salutations! This message is from the past." },
  { id: 15, date: "2020/02/13", text: "G'day! This message is from Aus!" }
];

const GET_USER_MESSAGES = gql`
query getMessages($email: String!) {
  getUser(email: $email) {
    messages{
      text
      date
    }
  }
}
`;

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  box: { height: "100%", },
  panel: { flex: 1 },
  input__panel: { flex: 1, padding: 20, color: "#979797" },
}))

const MessagePage = () => {
  const classes = useStyle();
  const [filter, setFilter] = useState("");
  const email = sessionStorage.getItem("currentUser");
  console.log(email);
  const {data, loading} = useQuery(GET_USER_MESSAGES,{
    variables: {email: email},
    onCompleted: data => {
      
    },
    onError: error =>{
      alert(error)
    }
  });
  const messages = data && data.messages ? data.messages : [];

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <Box className={classes.input__panel} borderBottom={1}>
            <MessageInput setMessage={() => { }} />
          </Box>
          <Box className={classes.input__panel} borderBottom={1}>
            <SearchBar setFilter={(newFilter) => setFilter(newFilter)} />
          </Box>
          <Box>
            <MessageList messages={messages} maxHeight="67vh" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

};

export default MessagePage;