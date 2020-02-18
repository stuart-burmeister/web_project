import { AppBar, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

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
  menu__item: { minWidth: 80, width: 80, height: 80, fontSize: 14, fontWeight: "bold", },
  active__tab: { flex: 1, paddingLeft: 25, paddingTop: 25 },
}));

const NavBar = props => {
  const { children, tabIndex } = props;
  const linkPaths = [
    "/main",
    "/user",
    "/message",
  ]
  let history = useHistory();
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item >
        <AppBar className={classes.container} position="static">
          <VerticalTabs
            orientation="vertical"
            variant="fullWidth"
            value={tabIndex}
            onChange={(_, newValue) => history.push(linkPaths[newValue])}>
            <MenuTab className={classes.menu__item} label="Main" />
            <MenuTab className={classes.menu__item} label="User" />
            <MenuTab className={classes.menu__item} label="Message" />
          </VerticalTabs>
        </AppBar>
      </Grid>
      <Grid item className={classes.active__tab}>
        {
          children
        }
      </Grid>
    </Grid>
  );
}

NavBar.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default NavBar;