import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { SearchBar } from "../";
import { UserList } from "./components";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "column" },
  item: { display: "flex", flexDirection: "column", flex: 1, width: "100%", },
  box: { flex: 1, padding: 20, },
  heading: { fontFamily: "AppleSDGothicNeo-Bold", fontWeight: "bold", fontSize: 24, color: 'black' },
  user__list: { flex: 9, },
}))

const UserPanel = props => {
  const { title, selectedUser, onSelect } = props;
  const [userFilter, setUserFilter] = useState("");
  const classes = useStyle();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item>
        <Box className={classes.box} color={"#979797"} borderBottom={1} >
          {
            title && (
              <Typography className={classes.heading}>
                User List
              </Typography>)
          }
          <SearchBar setFilter={(newFilter) => setUserFilter(newFilter.toLowerCase())} />
        </Box>
        <Grid className={classes.user__list} >
          <UserList filter={userFilter} selectedUser={selectedUser} onSelect={(user) => onSelect(user)} />
        </Grid>
      </Grid>
    </Grid>
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