import { IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: { display: "flex", height: "100%", width: "100%", flexDirection: "column", },
  container: { maxHeight: props => props.maxHeight },
  icon: {
    width:20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
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
  oddRow: { backgroundColor: "white", fontWeight: "bold", fontSize: 14 },
  evenRow: { backgroundColor: "#979797", fontWeight: "bold", fontSize: 14 },
  oval: {
    display:"flex",
    flexDirection:"column",
    width: "16px",
    height: "16px",
    backgroundColor: "#979797",
    fontSize:14,
    color: "white",
  },
}));

const MessageList = props => {
  const { messages } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell className={classes.icon} />
              <TableCell className={classes.headMail}>
                DATE
              </TableCell>
              <TableCell className={classes.head}>
                TEXT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              messages.map((row, index) => {
                const rowStyle = index % 2 ? classes.evenRow : classes.oddRow;
                return (
                  <TableRow>
                    <TableCell className={rowStyle}>
                      <IconButton className={classes.oval} >
                        <div >
                          X
                        </div>
                      </IconButton>
                    </TableCell>
                    <TableCell className={rowStyle}>
                      {row.date}
                    </TableCell>
                    <TableCell className={rowStyle}>
                      {row.text}
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

export default MessageList;