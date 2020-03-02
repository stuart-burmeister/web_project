import { Box, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { CustomBackdrop } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    display:"flex",
    height: 400,
    width: 300,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  button: {
    height: 80,
    width : 120
  }
}));

export default {
  component: CustomBackdrop,
  title: "Backdrop",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  return (
    <Box border={1} className={classes.root}>
      <CustomBackdrop open={open} title="This is a test title!" onClick={() => setOpen(false)}/>
      <Button className={classes.button} variant="contained" onClick={() => setOpen(true)}>
        Click To Open
      </Button>
    </Box>
  );
};