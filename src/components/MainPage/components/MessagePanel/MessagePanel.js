import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { MessageList } from "../../../";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  box: {
    padding: 20,
    borderColor: theme.palette.secondary.main,
  },
  heading: {
    fontFamily: "AppleSDGothicNeo-Bold",
    fontWeight: "bold",
    fontSize: 24,
    color: theme.palette.common.black,
  },
  message__list: { flex: 9, },
}));

const MessagePanel = props => {
  const { title, email } = props;

  const classes = useStyle();

  const [size, setSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Grid className={classes.root} container>
        <Box className={classes.box} borderBottom={1} >
          {
            title && (
              <Typography className={classes.heading}>
                Total: {!isLoading && size}
              </Typography>)
          }
        </Box>
        <Grid className={classes.message__list} item>
          <MessageList email={email}
            onQuery={(messages, loading) => {
              setSize(messages.length);
              setIsLoading(loading);
            }}
            heightOffset={184}/>
        </Grid>
      </Grid>
    </Box>
  );
};

MessagePanel.propTypes = {
  title: PropTypes.bool,
  email: PropTypes.string.isRequired,
  setIsLoading: PropTypes.func,
};

export default MessagePanel;