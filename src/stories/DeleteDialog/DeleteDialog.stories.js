import { Box, Button, makeStyles } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { DeleteDialog } from "../../components";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: 400,
    width: 500,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default {
  component: DeleteDialog,
  title: "Delete Dialog",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const onClose = response =>{
    setOpen(false)
    action("dialog response")(response)
  }

  return (
    <Box border={1} className={classes.root}>
      <Button variant="contained" onClick={() => setOpen(true)}>Show Dialog</Button>
      <DeleteDialog open={open} onClose={(response) => onClose(response)}/>
    </Box>
  );
};