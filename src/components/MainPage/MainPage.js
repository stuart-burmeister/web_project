import React from "react";
import { Grid, Paper } from "@material-ui/core";
import UserPanel from "./UserPanel";

const MainPage = () => {

  return (
    <Grid container spacing={3} style={{height:"100%",width:"100%", flexDirection:"row"}}>
      <Grid item style={{color:"red", flex:1}}>
        <UserPanel/>
      </Grid>
      <Grid item style={{color:"red", flex:2}}>
        <Paper style={{height:"100%", backgroundColor:'#f0f'}}/>
      </Grid>
    </Grid>
  );

};

export default MainPage;