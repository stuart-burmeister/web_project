import React from "react";
import { Dialog, DialogTitle, Button, makeStyles, Box, DialogActions } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  root: { display: "flex", flex: 1, alignContent: "center", justifyContent: "center" },
  container: { flexDirection: "column", width: 400, height: 150 },
  title: { fontSize:24, fontWeight:"bold", },
  button: { color: "#ffffff", fontSize: 14, padding:20 },
  cancel__button: { color: "#ffffff", fontSize: 14, backgroundColor: "#c8c8c8", padding:20 },
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
          <Button className={classes.cancel__button} onClick={() => onClose(false)}>
            No
          </Button>
        </DialogActions>

      </Box>
    </Dialog>
  );
};

export default DeleteDialog;