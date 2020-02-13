import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import UserPanel from "./UserPanel";
import SignUp from "../SignUp";

const useStyle = makeStyles(() => ({
  root: { width: "100%", height: "100%", flexDirection: "row" },
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
          <UserPanel title />
        </Box>
      </Grid>
    </Grid>
  );

};

export default MainPage;