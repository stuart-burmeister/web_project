import { Box, Button, Dialog, DialogActions, DialogTitle, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    width: 400,
    height: 150,
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    color: "#ffffff",
    fontSize: 14,
    padding: 20,
  },
}));

const DeleteDialog = props => {
  const { open, onClose } = props;
  const classes = useStyles();
  return (
    <Dialog className={classes.root} onClose={() => onClose(false)} open={open}>
      <Box className={classes.container}>
        <DialogTitle disableTypography className={classes.title}>
          Delete!
        </DialogTitle>
        <DialogActions>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => onClose(true)}>
            Yes
          </Button>
          <Button className={classes.button} variant="contained" color="secondary" onClick={() => onClose(false)}>
            No
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default DeleteDialog;