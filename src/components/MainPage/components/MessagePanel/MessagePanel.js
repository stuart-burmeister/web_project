import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { MessageList, GET_USER_MESSAGES } from "../../../";
import PropTypes from "prop-types";
import {useQuery} from "@apollo/react-hooks";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "column" },
  item: { display: "flex", flexDirection: "column", flex: 0.5, width: "100%", },
  box: { flex: 1, padding: 20, },
  heading: { fontFamily: "AppleSDGothicNeo-Bold", fontWeight: "bold", fontSize: 24, color: 'black' },
  message__list: { flex: 9, },
}))

const MessagePanel = props => {
  const { title, email } = props;
  const classes = useStyle();

  const { data, loading } = useQuery(GET_USER_MESSAGES, {
    variables: { email: email },
    onCompleted: data => {
    },
    onError: error => {
      alert(error)
    }
  });
  const messages = data && data.getUser ? data.getUser.messages : [];

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
          <MessageList messages={messages} email={email} maxHeight="84vh"/>
        </Grid>
      </Grid>

    </Grid>
  );
};

MessagePanel.propTypes ={
  title: PropTypes.bool,
  messages : PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
};

export default MessagePanel;