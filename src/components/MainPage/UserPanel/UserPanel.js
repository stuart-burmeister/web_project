import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { SearchBar } from "../..";
import UserList from "./UserList";

const useStyle = makeStyles(() => ({
  root: { width: "100%", height: "100%", flexDirection: "column" },
  item: { flex: 1, width: "100%", },
  userList: { flex: 9 },
  box: { height: "100%", padding :20 },
  heading: { fontFamily: "AppleSDGothicNeo-Bold"}
}))

const UserPanel = () => {
  const [userFilter, setUserFilter] = useState("");
  const classes = useStyle();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item>
        <Box item className={classes.box} border={1} borderColor={"#979797"}>
          <Typography className={classes.heading}>
            User List
          </Typography>
          <SearchBar setFilter={(filter) => setUserFilter(filter)} />
        </Box>
      </Grid>
      <Grid className={classes.userList} item>
        <UserList filter={userFilter}/>
      </Grid>
    </Grid>
  );
}

export default UserPanel;