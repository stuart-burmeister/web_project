import { Dialog, DialogTitle, TextField } from "@material-ui/core";
import React, { useState } from "react";

const ModifyDialog = props => {
  const { text, onClose, } = props;
  const [currentText, setCurrentText] = useState(text);
  return (
    <Dialog>
      <DialogTitle>
        Modify
    </DialogTitle>
      <TextField margin="dense" value={currentText} onChange={(event) => setCurrentText(event.target.value)} fullWidth />
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