import { AppBar, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { MainPage, MessagePage, UserPage } from "../";

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
  container: { flexDirection: "column", height: "100%", width: 80, alignItems: "center", justifyContent: "flex-start", },
  menuItem: { minWidth: 80, width: 80, height: 80, fontSize: 14, fontWeight: "bold", },
  activeTab: { flex: 1, paddingLeft: 25, paddingTop: 25 },
  label: {  fontFamily:"AppleSDGothicNeo-regular",},
}));


const NavBar = props => {
  const { links } = props;
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const pages = [<MainPage/>,<UserPage/>, <MessagePage/>]
  const currentTab = pages[value];
  return (
    <Grid container className={classes.root}>
      <Grid item >
        <AppBar className={classes.container} position="static">
          <VerticalTabs
            orientation="vertical"
            variant="fullWidth"
            value={value}
            onChange={(_, newValue) => setValue(newValue)}>
            <MenuTab className={classes.menuItem} label="Main" />
            <MenuTab className={classes.menuItem} label="User"/>
            <MenuTab className={classes.menuItem} label="Message"/>
          </VerticalTabs>
        </AppBar>
      </Grid>
      <Grid item className={classes.activeTab}>
        {currentTab}
      </Grid>
    </Grid>

  );
}

export default NavBar;