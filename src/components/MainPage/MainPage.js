import React from "react";
import { Grid, Paper } from "@material-ui/core";
import UserPanel from "./UserPanel";
import SignUp from "../SignUp";

const MainPage = () => {

  return (
    <Grid container spacing={3} style={{height:"100%",width:"100%", flexDirection:"row"}}>
      <Grid item style={{color:"red", flex:1}}>
        <SignUp/>
      </Grid>
      <Grid item style={{color:"red", flex:2}}>
        <UserPanel/>
      </Grid>
    </Grid>
  );

};

export default MainPage;