import { AppBar, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    flexDirection: "row"
  },
  container: {
    display:"flex",
    flexDirection: "column",
    height: "100%",
    width: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabs__root:{
    display:"flex",
    height:"100%",
  },
  tabs__indicator: {
    display:"none",
  },
  tabs__flexContainer:{
    display:"grid",
    height:"100%",
  },
  tab__root: {
    minWidth: 80,
    width: 80,
    height: 80,
    fontSize: 14,
    fontWeight: "bold",
    color:theme.palette.common.white,
  },
  tab__selected: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    display: "flex"
  },
  tab__signout: {
    justifySelf: "flex-end",
    justifyItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf:"flex-end"
  },
  active__page: {
    flex: 1,
    paddingLeft: 25,
    paddingTop: 25
  },
}));

const NavBar = props => {
  const { children, tabIndex } = props;
  const linkPaths = [
    "/main",
    "/user",
    "/message",
  ];
  let history = useHistory();
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item >
        <AppBar className={classes.container} position="static">
          <Tabs
            classes={{
              indicator: classes.tabs__indicator,
              flexContainerVertical: classes.tabs__flexContainer,
            }}
            orientation="vertical"
            variant="fullWidth"
            value={tabIndex}
            onChange={(_, newValue) => history.push(linkPaths[newValue])}>
            <Tab classes={{
              root: classes.tab__root,
              selected: classes.tab__selected,
              }}
              label="Main" />
            <Tab classes={{
              root: classes.tab__root,
              selected: classes.tab__selected,
              }}
              label="User" />
            <Tab classes={{
              root: clsx(classes.tab__root) ,
              selected: classes.tab__selected,
              }}
              label="Message" />
          </Tabs>
          <Tab classes={{
              root: clsx(classes.tab__root, classes.tab__signout),
              selected: classes.tab__selected,
              }}
              label="Sign Out"
              onClick={() => history.push("/signout")}/>
        </AppBar>
      </Grid>
      <Grid item className={classes.active__page}>
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