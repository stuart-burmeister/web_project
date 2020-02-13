import React from "react";
import {Grid, Box, makeStyles} from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: { display:"flex", width: "100%", height: "100%", flexDirection: "row" },
  box: { height: "100%", },
  userPanel: { flex: 1 },
  messagePanel: { flex: 2 },
}))

const MessagePage = props => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.userPanel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
        </Box>
      </Grid>
    </Grid>
  );

};

export default MessagePage;