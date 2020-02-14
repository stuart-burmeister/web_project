import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const ModifyDialog = props => {
  const { open, message, onClose } = props;
  const [currentText, setCurrentText] = useState(message.text);
  useEffect(() => setCurrentText(message.text), [message]);
  return (
    <Dialog open={open}>
      <DialogTitle>
        Modify
      </DialogTitle>
      <TextField value={currentText}  onChange={(event) => setCurrentText(event.target.value)} fullWidth />
      <DialogActions>
        <Button onClick={() => onClose(true)}>
          Yes
      </Button>
        <Button onClick={() => onClose(false)}>
          No
      </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModifyDialog;