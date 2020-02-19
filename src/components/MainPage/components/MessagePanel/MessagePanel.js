import { useQuery } from "@apollo/react-hooks";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { MessageList } from "../../../";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "column" },
  container: { display: "flex", flexDirection: "column", flex: 0.5, width: "100%", },
  box: { flex: 1, padding: 20, },
  heading: { fontFamily: "AppleSDGothicNeo-Bold", fontWeight: "bold", fontSize: 24, color: 'black' },
  message__list: { flex: 9, },
}));

const MessagePanel = props => {
  const { title, email } = props;

  const classes = useStyle();

  const [size, setSize] = useState(0);

  return (
    <Box className={classes.root} >
      <Grid className={classes.container} container>
        <Box className={classes.box} color={"#979797"} borderBottom={1} >
          {
            title && (
              <Typography className={classes.heading}>
                Total: {size}
              </Typography>)
          }
        </Box>
        <Grid className={classes.message__list} item>
          <MessageList email={email} onQuery={messages => setSize(messages.length)} maxHeight="84vh" />
        </Grid>
      </Grid>
    </Box>
  );
};

MessagePanel.propTypes = {
  title: PropTypes.bool,
  email: PropTypes.string.isRequired,
};

export default MessagePanel;