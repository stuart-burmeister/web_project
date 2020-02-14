import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {dummyValues} from "../../../../data/DummyData"

const __dummyValues = [
  { name: "Erin", email: "friend@sis.com", messages: [] },
  { name: "His Lordship Montgomery Ericcson Lancaster III", email: "superboy@play.co.za" },
  { name: "peterey", email: "friend@bro.com" },
  { name: "mooshu", email: "snooze@lazy.co.uk" },
  { name: "noni", email: "friend@sis.com" },
  { name: "mont", email: "superboy@play.co.za" },
  { name: "pt", email: "friend@bro.com" },
  { name: "noosh", email: "snooze@lazy.co.uk" },
  { name: "nonimoo", email: "friend@sis.com" },
  { name: "monty", email: "superboy@play.co.za" },
  { name: "ptp", email: "friend@bro.com" },
  { name: "skadoosh", email: "snooze@lazy.co.uk" },
  { name: "moosey", email: "friend@sis.com" },
  { name: "fluff", email: "superboy@play.co.za" },
  { name: "gwa", email: "friend@bro.com" },
  { name: "noo", email: "snooze@lazy.co.uk" },
];

const useStyles = makeStyles(() => ({
  root: { display: "flex", height: "100%", width: "100%", flexDirection: "column", },
  container: { maxHeight: "76vh" },
  header__mail: {
    maxWidth: 250,
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
  header__name: {
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
  odd__row: { backgroundColor: "white", fontWeight: "bold", fontSize: 14 },
  even__row: { backgroundColor: "#979797", fontWeight: "bold", fontSize: 14 },
  selected__row: { backgroundColor: "#73bbff", fontWeight: "bold", fontSize: 14 }
}));

const UserList = props => {
  const { filter, selectedUser, onSelect } = props;
  const classes = useStyles();
  const users = dummyValues.filter((entry) =>  entry.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell className={classes.header__mail}>
                EMAIL
              </TableCell>
              <TableCell className={classes.header__name}>
                NAME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((row, index) => {
                var rowStyle = index % 2 ? classes.even__row : classes.odd__row;
                const isRowSelected = selectedUser && row.name === selectedUser.name;
                if (isRowSelected) {
                  rowStyle = classes.selected__row;
                }
                return (
                  <TableRow key={"row-" + index} selected={isRowSelected} hover onClick={() => onSelect(row)}>
                    <TableCell className={rowStyle}>
                      {row.email}
                    </TableCell>
                    <TableCell className={rowStyle}>
                      {row.name}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

UserList.propTypes = {
  filter: PropTypes.string,
  selectedUser: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired
}

export default UserList;