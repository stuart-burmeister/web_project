import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { MessageList } from "../../../";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  box: {
    display:"flex",
    height: "36px",
    padding: 20,
    borderColor: theme.palette.secondary.main,
  },
  heading: {
    fontFamily: "AppleSDGothicNeo-Bold",
    fontWeight: "bold",
    fontSize: 24,
    color: theme.palette.common.black,
  },
  message__list: { 
    height: "calc(100% - 77px)",
   },
}));

const MessagePanel = props => {
  const { title, email } = props;

  const classes = useStyle();

  const [size, setSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box className={classes.root}>
      <Grid className={classes.root} container>
        <Grid className={classes.item} item>
          <Box className={classes.box} borderBottom={1} >
            {
              title && (
                <Typography className={classes.heading}>
                  Total: {!isLoading && size}
                </Typography>)
            }
          </Box>
          <Box className={classes.message__list}>
            <MessageList email={email}
              onQuery={(messages, loading) => {
                setSize(messages.length);
                setIsLoading(loading);
              }}
              heightOffset={127} />
          </Box>
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