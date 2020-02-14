import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import { SignUp, UserPanel, ModifyUser } from "../";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  input__panel: { flex: 1 },
  box: { height: "100%", },
  user__panel: { flex: 2 },
}));

const UserPage = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.input__panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <ModifyUser />
        </Box>
      </Grid>
      <Grid className={classes.user__panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <UserPanel title />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserPage;