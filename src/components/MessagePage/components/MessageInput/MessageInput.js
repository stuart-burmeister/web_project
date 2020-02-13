import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", width: "100%", height: "100%", paddingTop: 10 },
  inputField: { maxWidth: 330, height: 56, flex: 1 },
  button: { width: 56, height: 56,color:"white", backgroundColor:theme.palette.primary.main, marginLeft: 10 }
}));

const MessageInput = props => {
  const { setMessage } = props;
  const [inputVal, setInputVal] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField className={classes.inputField} variant="outlined" label="Text" onChange={({ target }) => setInputVal(target.value)} value={inputVal}/>
      <Button className={classes.button} onClick={() => setMessage(inputVal)}>
        Save
      </Button>
    </div>
  );
}

export default MessageInput;