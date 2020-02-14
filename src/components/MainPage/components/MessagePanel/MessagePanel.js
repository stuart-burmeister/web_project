import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { MessageList } from "../../../"

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

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "column" },
  item: { display: "flex", flexDirection: "column", flex: 0.5, width: "100%", },
  box: { flex: 1, padding: 20, },
  heading: { fontFamily: "AppleSDGothicNeo-Bold", fontWeight: "bold", fontSize: 24, color: 'black' },
  message__list: { flex: 9, },
}))

const MessagePanel = props => {
  const { title, } = props;
  const messages = messageDummy;
  const classes = useStyle()
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item>
        <Box className={classes.box} color={"#979797"} borderBottom={1} >
          {
            title && (
              <Typography className={classes.heading}>
                Total: {messages.length}
              </Typography>)
          }
        </Box>
        <Grid className={classes.message__list} item>
          <MessageList messages={messages} maxHeight="84vh"/>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MessagePanel;