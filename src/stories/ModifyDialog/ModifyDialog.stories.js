import { Box, Button, makeStyles } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { ModifyDialog } from "../../components";

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
  component: ModifyDialog,
  title: "Modify Dialog",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const onClose = response => {
    action("response")(response ? "Yes" : "No");
    setOpen(false)
  }

  return (
    <Box border={1} className={classes.root}>
      <Button variant="contained" onClick={() => setOpen(true)}>Show Dialog</Button>
      <ModifyDialog message={{ text: "Example Text" }} open={open} onClose={(response) => onClose(response)} />
    </Box>
  );
};