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
  container: {
    maxHeight: "76vh",
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
  header__mail: {
    width: "30%",
  },
  font: {
    fontWeight: "bold",
    fontSize: 14,
  },
  odd__row: { backgroundColor: "white", },
  even__row: { backgroundColor: "#979797", },
  selected__row: { backgroundColor: "#73bbff", }
}));

const UserList = props => {
  const { filter, selectedUser, onSelect } = props;

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
      <CustomTable loading={loading}
        list={users}
        selectedItem={selectedUser}
        renderHeader={(header) =>
          <TableRow>
            <TableCell className={clsx(header, classes.header__mail)}>
              EMAIL
            </TableCell>
            <TableCell className={header}>
              NAME
            </TableCell>
          </TableRow>
        }
        renderItem={(row, index, style) => {
          return (
            <TableRow key={"row-" + index} onClick={() => onSelect(row)}>
              <TableCell className={style}>
                {row.email}
              </TableCell>
              <TableCell className={style}>
                {row.username}
              </TableCell>
            </TableRow>
          )}}/>
    </Box>
  );
};

UserList.propTypes = {
  filter: PropTypes.string.isRequired,
  selectedUser: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired
}

export default UserList;
export { SEARCH_USERS };

