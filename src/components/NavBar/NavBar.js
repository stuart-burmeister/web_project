import { AppBar, makeStyles, Tab, Tabs, Grid, Paper, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { MainPage } from "../"

const VerticalTabs = withStyles(theme => ({
  indicator: {
    display: 'none',
  },
  flexContainer: {
    display: "grid"
  }

}))(Tabs);

const MenuTab = withStyles(theme => ({
  textColorPrimary: "white",
  selected: {
    color: "black",
    backgroundColor: "white",
    display: "grid"
  }
}))(Tab);

const useStyles = makeStyles(() => ({
  root: { width: "100vw", height: "100vh", flexDirection: "row" },
  container: { flexDirection: "column", height: "100%", width: 80, alignItems: "center", justifyContent: "flex-start", backgroundColor: "teal" },
  item: { minWidth: 80, width: 80, height: 80, fontSize: 14, fontWeight: "bold" },
}));

const NavBar = props => {
  const { links } = props;
  const classes = useStyles();
  const tabs = [{ title: "Main", link: "links[0]" },
  { title: "User", link: "links[1]" },
  { title: "Message", link: "links[2]" },];
  const [value, setValue] = useState(0);
  //const history = useHistory();
  const currentTab = (<MainPage />);
  return (
    <Grid container className={classes.root}>
      <Grid item style={{ width: 80 }}>
        <AppBar className={classes.container} position="static" style={{width:80}}>
          <VerticalTabs
            orientation="vertical"
            variant="fullWidth"
            value={value}
            onChange={(_, newValue) => setValue(newValue)}>
            <MenuTab className={classes.item} label="Main" />
            <MenuTab className={classes.item} label="User" />
            <MenuTab className={classes.item} label="Message" />
          </VerticalTabs>
        </AppBar>
      </Grid>
      <Grid item style={{ flex: 1, marginLeft:25, marginTop:25}}>
        {currentTab}
      </Grid>
    </Grid>

  );
}

export default NavBar;