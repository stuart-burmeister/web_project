import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  head: {
    backgroundColor: "white",
    borderWidth: 5
  },
  body: {
    fontSize: 14
  }
}));

const dummyValues = [
  { name: "erin", email: "friend@sis.com" },
  { name: "His Lordship Montgomery Ericcson Lancaster III", email: "superboy@play.co.za" },
  { name: "pete", email: "friend@bro.com" },
  { name: "moosh", email: "snooze@lazy.co.uk" },
  { name: "erin", email: "friend@sis.com" },
  { name: "His Lordship Montgomery Ericcson Lancaster III", email: "superboy@play.co.za" },
  { name: "pete", email: "friend@bro.com" },
  { name: "moosh", email: "snooze@lazy.co.uk" },
  { name: "erin", email: "friend@sis.com" },
  { name: "His Lordship Montgomery Ericcson Lancaster III", email: "superboy@play.co.za" },
  { name: "pete", email: "friend@bro.com" },
  { name: "moosh", email: "snooze@lazy.co.uk" },
  { name: "erin", email: "friend@sis.com" },
  { name: "His Lordship Montgomery Ericcson Lancaster III", email: "superboy@play.co.za" },
  { name: "pete", email: "friend@bro.com" },
  { name: "moosh", email: "snooze@lazy.co.uk" },
];

const UserList = props => {
  const { filter } = props;
  const classes = useStyles();
  const users = dummyValues;
  return (
    <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", }}>
      <TableContainer style={{ maxHeight: 630 }}>
        <Table stickyHeader>
          <TableHead >
            <TableRow style={{ backgroundColor: "#979797" }}>
              <TableCell style={{ width: 250, fontWeight: "bold", backgroundColor: "white", borderWidth: 1, borderColor: "#979797" }}>
                EMAIL
              </TableCell>
              <TableCell style={{ fontWeight: "bold", backgroundColor: "white", borderWidth: 1, borderColor: "#979797" }}>
                NAME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((row, index) => (
                <TableRow>
                  <TableCell style={{ backgroundColor: (index % 2 === 0) ? "white" : "#979797", fontWeight: "bold" }}>
                    {row.email}
                  </TableCell>
                  <TableCell style={{ backgroundColor: (index % 2 === 0) ? "white" : "#979797", fontWeight: "bold" }}>
                    {row.name}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;