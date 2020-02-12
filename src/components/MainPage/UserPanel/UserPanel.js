import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import { SearchBar } from "../..";

const useStyle = makeStyles(() => ({
  root: { width: "100%", },
  item: { width: "100%", },
  box: { padding: 20, height: "100%" },
}))

const UserPanel = () => {
  const [userFilter, setUserFilter] = useState("");
  const classes = useStyle();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item>
        <Box item className={classes.box} border={2} borderColor={"#979797"}>
          <SearchBar setFilter={(filter) => setUserFilter(filter)} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserPanel;