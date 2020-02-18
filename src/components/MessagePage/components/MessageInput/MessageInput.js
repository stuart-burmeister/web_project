import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", width: "100%", height: "100%", paddingTop: 10 },
  input__field: { maxWidth: 330, height: 56, flex: 1 },
  button: { width: 56, height: 56, color: "white", backgroundColor: theme.palette.primary.main, marginLeft: 10 }
}));

const MessageInput = props => {
  const { setMessage } = props;
  const [inputVal, setInputVal] = useState("");
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TextField className={classes.input__field} variant="outlined" label="Text" onChange={({ target }) => setInputVal(target.value)} value={inputVal} />
      <Button className={classes.button} onClick={() => {
        setMessage(inputVal)
        setInputVal("")
      }}>
        Save
      </Button>
    </Box>
  );
}

MessageInput.propTypes = {
  setMessage: PropTypes.func.isRequired,
};

export default MessageInput;