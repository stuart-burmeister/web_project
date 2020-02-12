import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar } from "../..";

const UserPanel = () => {
  const [userFilter, setUserFilter] = useState ("");
  return (
    <Grid container style={{width:"100%"}}>
      <Grid item style={{width:"100%"}}>
        <SearchBar setFilter={(filter) => setUserFilter(filter)}/>
      </Grid>
    </Grid>
  );
}

export default UserPanel;