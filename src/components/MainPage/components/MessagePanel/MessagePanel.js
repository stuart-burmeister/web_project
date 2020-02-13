import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { MessageList } from "../../../"

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
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "column" },
  item: { display: "flex", flexDirection: "column", flex: 0.5, width: "100%", },
  userList: { flex: 9, },
  box: { flex: 1, padding: 20, },
  heading: { fontFamily: "AppleSDGothicNeo-Bold", fontWeight: "bold", fontSize: 24, color: 'black' }
}))

const MessagePanel = props => {
  const { title, } = props;
  const messages = messageDummy;
  const classes = useStyle()
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item>
        <Box item className={classes.box} color={"#979797"} borderBottom={1} >
          {
            title && (
              <Typography className={classes.heading}>
                Total: {messages.length}
              </Typography>)
          }
        </Box>
        <Grid className={classes.userList} item>
          <MessageList messages={messages} maxHeight="84vh"/>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MessagePanel;