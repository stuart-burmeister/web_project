import { useQuery } from "@apollo/react-hooks";
import { Box, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

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
  container: { maxHeight: "76vh" },
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
    fetchPolicy:"network-only",
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
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell className={clsx(classes.header, classes.header__mail)}>
                EMAIL
              </TableCell>
              <TableCell className={classes.header}>
                NAME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !loading &&
              users.map((row, index) => {
                var rowStyle = index % 2 ? classes.even__row : classes.odd__row;
                const isRowSelected = selectedUser && row.username === selectedUser.username;
                if (isRowSelected) {
                  rowStyle = classes.selected__row;
                }
                return (
                  <TableRow key={"row-" + index} selected={isRowSelected} hover onClick={() => onSelect(isRowSelected ? null : row)}>
                    <TableCell className={clsx(classes.font,rowStyle)}>
                      {row.email}
                    </TableCell>
                    <TableCell className={clsx(classes.font,rowStyle)}>
                      {row.username}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
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
