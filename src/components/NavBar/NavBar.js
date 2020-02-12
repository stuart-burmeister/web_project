import { Button, List, ListItem, ListItemText, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: { height: "100vh", position: "relative", },
  container: { flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center" },
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
  //const history = useHistory();
  return (
    <List component="nav" style={{height:"100vh"}}>
      <ListItem component="div" style={{flexDirection:"column", backgroundColor:"#00897b", width:"10%", height:"100vh"}}>
        {tabs.map(({ title, link }) => {
          return (
            <Button className={classes.button} fullWidth color="primary">

                  {title}

            </Button>
          )
        }
        )}
      </ListItem>
    </List>
  );
}

export default NavBar;