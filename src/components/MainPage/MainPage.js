import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { MessagePanel, UserPanel } from "./components/";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  box: { height: "100%", },
  userPanel: { flex: 1 },
  messagePanel: { flex: 2 },
}))

const MainPage = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.userPanel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <UserPanel />
        </Box>
      </Grid>
      <Grid className={classes.messagePanel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <MessagePanel title />
        </Box>
      </Grid>
    </Grid>
  );

};

export default MainPage;