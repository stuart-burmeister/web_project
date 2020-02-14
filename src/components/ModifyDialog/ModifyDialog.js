import { Button, Dialog, DialogActions, DialogTitle, makeStyles, TextField, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: { display: "flex", flex: 1, alignContent: "center", justifyContent: "center" },
  container: { display:"flex",flex:1, flexDirection: "column", width: 400, height: 200 },
  title: { fontSize: 24, fontWeight: "bold", },
  text__field: {margin:20},
  button: { color: "#ffffff", fontSize: 14, padding: 20 },
  cancel__button: { color: "#ffffff", fontSize: 14, backgroundColor: "#c8c8c8", padding: 20 },
}));

const ModifyDialog = props => {
  const { open, message, onClose } = props;
  const [currentText, setCurrentText] = useState(message.text);
  const classes = useStyles();
  useEffect(() => setCurrentText(message.text), [message]);
  return (
    <Dialog open={open} className={classes.root}>
      <Box className={classes.container}>
        <DialogTitle disableTypography className={classes.title}>
          Modify
        </DialogTitle>
        <TextField className={classes.text__field} variant="outlined" value={currentText} onChange={(event) => setCurrentText(event.target.value)} />
        <DialogActions>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => onClose(true)}>
            Yes
        </Button>
          <Button className={classes.cancel__button} variant="contained" onClick={() => onClose(false)}>
            No
        </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

ModifyDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ModifyDialog;