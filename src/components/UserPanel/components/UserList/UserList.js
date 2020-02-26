import { useQuery } from "@apollo/react-hooks";
import { Box, makeStyles, TableCell, TableRow } from "@material-ui/core";
import clsx from "clsx";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../CustomTable";

const SEARCH_USERS = gql`
  query searchUser($username: String, $email: String) {
    searchUser(args: { username: $username, email: $email }) {
      username
      email
    }
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  header__mail: {
    maxWidth: "250px",
    minWidth: "100px",
  },
  header__name: {
    minWidth: "100px",
  },
}));

const UserList = props => {
  const { filter, selectedUser, onSelect, heightOffset } = props;

  const classes = useStyles();

  const [users, setUsers] = useState([]);

  const { data, loading } = useQuery(SEARCH_USERS, {
    onCompleted: data => {
    },
    onError: error => {
      alert("Search failed: " + error.message);
    },
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });

  useEffect(() => {
    if (data && data.searchUser) {
      const userList = data.searchUser.filter((entry) => entry.username.toLowerCase().includes(filter.toLowerCase()))
      userList.sort((a, b) => {
        return (a.email.toLowerCase() < b.email.toLowerCase()) ? -1 : 1;
      });
      setUsers(userList);
    }
  }, [data, filter]);

  return (
    <Box className={classes.root}>
      <CustomTable heightOffset={heightOffset}
        loading={loading}
        list={users}
        selectedItem={selectedUser}
        renderHeader={(rowClass, cellClass) =>
          <TableRow className={rowClass} component="div" >
            <TableCell className={clsx(cellClass, classes.header__mail)}
              component="div">
              EMAIL
            </TableCell>
            <TableCell className={clsx(cellClass, classes.header__name)}
              component="div">
              NAME
            </TableCell>
          </TableRow>
        }
        renderItem={(row, index, rowClass, cellClass) =>
            <TableRow className={rowClass} component="div" key={"row-" + index} onClick={() => onSelect(row)}>
              <TableCell className={clsx(cellClass, classes.header__mail)}
                component="div"
                variant="body">
                {row.email}
              </TableCell>
              <TableCell className={cellClass}
                component="div" 
                variant="body">
                {row.username}
              </TableCell>
            </TableRow>
          }/>
    </Box>
  );
};

UserList.propTypes = {
  filter: PropTypes.string.isRequired,
  selectedUser: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  heightOffset: PropTypes.number,
}

export default UserList;
export { SEARCH_USERS };
