import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { SearchBar } from "../";
import { UserList } from "./components";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    maxHeight: "inherit",
    flexDirection: "column"
  },
  item: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  box: {
    flex: 1,
    padding: 20,
    color: theme.palette.secondary.main
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: theme.palette.common.black,
  },
  user__list: {
    flex: 9,
  },
}))

const UserPanel = props => {
  const { title, selectedUser, onSelect } = props;

  const classes = useStyle();

  const [userFilter, setUserFilter] = useState("");

  return (
    <Box>
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
              heightOffset={!title ? 215 : 250}
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