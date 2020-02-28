import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

const fixedHeight = 56;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  input__field: {
    maxWidth: 330,
    height: fixedHeight,
    flex: 1
  },
  button: {
    width: fixedHeight,
    height: fixedHeight,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10
  }
}));

const MessageInput = props => {
  const { setMessage, isLoading } = props;

  const classes = useStyles();

  const [inputVal, setInputVal] = useState("");

  return (
    <Box className={classes.root}>
      <TextField className={classes.input__field}
        variant="outlined"
        label="Text"
        disabled={isLoading}
        onChange={({ target }) => setInputVal(target.value)} value={inputVal}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            setMessage(inputVal);
            setInputVal("");
          }
        }} />
      <Button className={classes.button} disabled={isLoading} onClick={() => {
        setMessage(inputVal);
        setInputVal("");
      }}>
        Save
      </Button>
    </Box>
  );
}

MessageInput.propTypes = {
  setMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default MessageInput;