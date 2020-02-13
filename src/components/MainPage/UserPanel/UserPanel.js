import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { SearchBar } from "../..";
import UserList from "./UserList";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "column" },
  item: { display: "flex", flexDirection: "column", flex: 1, width: "100%", },
  userList: { flex: 9, },
  box: { flex: 1, padding: 20, },
  heading: { fontFamily: "AppleSDGothicNeo-Bold", fontWeight: "bold", fontSize: 24, color: 'black' }
}))

const UserPanel = () => {
  const [userFilter, setUserFilter] = useState("");
  const classes = useStyle();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item>
        <Box item className={classes.box} color={"#979797"} borderBottom={1} >
          <Typography className={classes.heading}>
            User List
          </Typography>
          <SearchBar setFilter={(filter) => setUserFilter(filter)} />
        </Box>
        <Grid className={classes.userList} item>
          <UserList filter={userFilter} />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default UserPanel;