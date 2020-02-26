import { Box, Button, Dialog, DialogActions, DialogTitle, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: 400,
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text__field: { margin: 20 },
  button: {
    color: theme.palette.common.white,
    fontSize: 14,
    padding: 20
  },
}));

const ModifyDialog = props => {
  const { open, message, onClose, } = props;

  const classes = useStyles();

  const [currentText, setCurrentText] = useState(message.text);
  useEffect(() => setCurrentText(message.text), [message]);
  return (
    <Dialog open={open} className={classes.root}>
      <Box className={classes.container}>
        <DialogTitle disableTypography className={classes.title}>
          Modify
        </DialogTitle>
        <TextField className={classes.text__field}
          variant="outlined"
          value={currentText}
          onChange={(event) => {
            setCurrentText(event.target.value);
          }}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              onClose(true, currentText);
            }
          }} />
        <DialogActions>
          <Button className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => onClose(true, currentText)}>
            Yes
        </Button>
          <Button className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => onClose(false, "")}>
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