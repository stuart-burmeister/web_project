import { Button, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";


const NavBar = props => {
  const { links } = props;
  const tabs = [{ title: "Main", link: "links[0]" },
  { title: "User", link: "links[1]" },
  { title: "Message", link: "links[2]" },];
  //const history = useHistory();
  return (
    <List component="nav">
      <ListItem component="div" style={{flexDirection:"column"}}>
        {tabs.map(({ title, link }) => {
          return (
            <Button  color="inherit">
              <ListItemText inset key={title}>
                <Typography color="inherit" >
                  {title}
                </Typography>
              </ListItemText>
            </Button>
          )
        }
        )}
      </ListItem>
    </List>
  );
}

export default NavBar;