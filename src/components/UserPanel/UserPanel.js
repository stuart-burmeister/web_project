import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { SearchBar, UserList } from "../";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  box: {
    height: props => props.title ? "97px" : "57px",
    padding: 20,
    color: theme.palette.secondary.main
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: theme.palette.common.black,
  },
  user__list: {
    height: props => `calc(100% - ${props.title ? "138px" : "98px"})`
  },
}))

const UserPanel = props => {
  const { title, selectedUser, onSelect } = props;

  const classes = useStyle(props);

  const [userFilter, setUserFilter] = useState("");

  return (
    <Box className={classes.root} id="user_panel">
      <Grid className={classes.root} container>
        <Grid className={classes.item} item>
          <Box className={classes.box}
            borderBottom={1} >
            {
              title && (
                <Typography className={classes.heading}>
                  User List
                </Typography>)
            }
            <SearchBar setFilter={(newFilter) => {
              setUserFilter(newFilter.toLowerCase());
              onSelect(null);
            }} />
          </Box>
          <Grid className={classes.user__list} >
            <UserList
              filter={userFilter}
              selectedUser={selectedUser}
              onSelect={(user) => onSelect(user)} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

UserPanel.propTypes = {
  title: PropTypes.bool,
  selectedUser: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
};

export default UserPanel;