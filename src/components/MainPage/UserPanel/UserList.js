import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";



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

const useStyles = makeStyles(() => ({
  root: { display: "flex", height: "100%", width: "100%", flexDirection: "column", },
  container: { maxHeight: "76vh" },
  headMail: {
    maxWidth: 250,
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
  head: {
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
  evenRow: { backgroundColor: "white", fontWeight: "bold", fontSize: 14 },
  oddRow: { backgroundColor: "#979797", fontWeight: "bold", fontSize: 14 },
}));

const UserList = props => {
  const { filter } = props;
  const classes = useStyles();
  const users = dummyValues;
  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell className={classes.headMail}>
                EMAIL
              </TableCell>
              <TableCell className={classes.head}>
                NAME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((row, index) => {
                const rowStyle = index % 2 ? classes.evenRow : classes.oddRow;
                return (
                  <TableRow>
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

export default UserList;