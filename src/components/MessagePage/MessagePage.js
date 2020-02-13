import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import { MessageInput } from "./components";
import { SearchBar, MessageList } from "../";

const messageDummy = [
  { date: "2020/03/03", text: "Hello. this message is from the future." },
  { date: "1066/11/02", text: "Salutations! This message is from the past." },
  { date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { date: "2020/03/03", text: "Hello. this message is from the future." },
  { date: "1066/11/02", text: "Salutations! This message is from the past." },
  { date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { date: "2020/03/03", text: "Hello. this message is from the future." },
  { date: "1066/11/02", text: "Salutations! This message is from the past." },
  { date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { date: "2020/03/03", text: "Hello. this message is from the future." },
  { date: "1066/11/02", text: "Salutations! This message is from the past." },
  { date: "2020/02/13", text: "G'day! This message is from Aus!" },
  { date: "2020/03/03", text: "Hello. this message is from the future." },
  { date: "1066/11/02", text: "Salutations! This message is from the past." },
  { date: "2020/02/13", text: "G'day! This message is from Aus!" }
];

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  box: { height: "100%", },
  panel: { flex: 1 },
  inputPanel: { flex: 1, padding:20 , color: "#979797"},
}))

const MessagePage = props => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <Box className={classes.inputPanel} borderBottom={1}>
            <MessageInput setMessage={() => { }} />
          </Box>
          <Box className={classes.inputPanel} borderBottom={1}>
            <SearchBar setFilter={() => { }} />
          </Box>
          <Box>
            <MessageList messages={messageDummy} maxHeight="67vh"/>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

};

export default MessagePage;