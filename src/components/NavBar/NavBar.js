import { Button, List, ListItem, ListItemText, Typography, makeStyles, Tab, AppBar, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import App from "../../App";
import { withStyles } from "@material-ui/styles";

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none',
  }
}))(Tabs);

const MyTab = withStyles(theme => ({
  selected: {
    color: 'tomato',
    borderBottom: '2px solid tomato'
  }
}))(Tab);

const useStyles = makeStyles(() => ({
  container: { flexDirection: "column", height: "100%", width:"10%", alignItems: "center", justifyContent: "center" },
  item: { width: 380, },
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
      <VerticalTabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        color="primary">
        <MyTab label="Main"/>
        <MyTab label="User"/>
        <MyTab label="Message"/>
      </VerticalTabs>
  );
}

export default NavBar;