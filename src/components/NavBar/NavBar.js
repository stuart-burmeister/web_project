import { Button, List, ListItem, ListItemText, Typography, makeStyles, Tab, AppBar, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import App from "../../App";
import { withStyles } from "@material-ui/styles";

const VerticalTabs = withStyles(theme => ({
  indicator: {
    display: 'none',
  },
  flexContainer: {
    display: "grid"
  }

}))(Tabs);

const MenuTab = withStyles(theme => ({
  selected: {
    color: "black",
    backgroundColor: "white",
    display: "grid"
  }
}))(Tab);

const useStyles = makeStyles(() => ({
  container: { flexDirection: "column", height: "100vh", width: "80px", alignItems: "center", justifyContent: "flex-start" },
  item: { width: 80, height: 80, fontSize: 14, fontWeight: "bold" },
  header: { textAlign: "center", color: "#00897b", fontSize: 24, fontWeight: "bold" },
  input: { width: "100%", fontSize: 14 },
  button: { color: "#ffffff", fontSize: 14 },
  link: { alignSelf: "left", fontSize: 14 }
}));

const NavBar = props => {
  const { links } = props;
  const classes = useStyles();
  const tabs = [{ title: "Main", link: "links[0]" },
  { title: "User", link: "links[1]" },
  { title: "Message", link: "links[2]" },];
  const [value, setValue] = useState(0);
  //const history = useHistory();
  return (
    <AppBar className={classes.container} position="static">
      <VerticalTabs
        orientation="vertical"
        value={value}
        onChange={(_, newValue) => setValue(newValue)}>
        <MenuTab disableRipple className={classes.item} label="Main" />
        <MenuTab disableRipple className={classes.item} label="User" />
        <MenuTab disableRipple className={classes.item} label="Message" />
      </VerticalTabs>
    </AppBar>
  );
}

export default NavBar;