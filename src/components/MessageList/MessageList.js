import { IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: { display: "flex", height: "100%", width: "100%", flexDirection: "column", },
  container: { maxHeight: props => props.maxHeight },
  icon: {
    width: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797"
  },
  header__date: {
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
  oval: {
    display: "flex",
    flexDirection: "column",
    width: "16px",
    height: "16px",
    backgroundColor: "#979797",
    fontSize: 14,
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
                const rowStyle = index % 2 ? classes.even__row : classes.odd__row;
                return (
                  <TableRow key={"row-" + index}>
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

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.any,
  })),
  maxHeight: PropTypes.string,
};

export default MessageList;