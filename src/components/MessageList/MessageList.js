import { IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { DeleteDialog, ModifyDialog } from "..";

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
  odd__row: {backgroundColor: "white", fontWeight: "bold", fontSize: 14 },
  even__row: { backgroundColor: "#979797", fontWeight: "bold", fontSize: 14 },
  selected__row: { backgroundColor: "#73bbff", fontWeight: "bold", fontSize: 14 },
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
  const [currentMessage, setCurrentMessage] = useState({id:0,text:""});
  const [openDelete, setOpenDelete] = useState(false);
  const [openModify, setOpenModify] = useState(false);

  const onDelete = () => {
    setOpenDelete(false);
    setCurrentMessage({id:0,text:""});
  };

  const onModify = (newText) => {
    setOpenModify(false);
    setCurrentMessage({id:0,text:""});
  }

  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell className={classes.icon} />
              <TableCell className={classes.header__date}>
                DATE
              </TableCell>
              <TableCell className={classes.header__name}>
                TEXT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              messages.map((row, index) => {
                var rowStyle = index % 2 ? classes.even__row : classes.odd__row;
                if (currentMessage && currentMessage.id === row.id){
                  rowStyle = classes.selected__row;
                }
                return (
                  <TableRow key={"row-" + index} >
                    <TableCell className={rowStyle}>
                      <IconButton className={classes.oval} onClick={() => {
                        setCurrentMessage(row);
                        setOpenDelete(true);
                      }} >
                        <div >
                          X
                        </div>
                      </IconButton>
                    </TableCell>
                    <TableCell className={rowStyle}>
                      {row.date}
                    </TableCell>
                    <TableCell className={rowStyle} onClick={() => {
                      setCurrentMessage(row);
                      setOpenModify(true);
                      }}>
                      {row.text}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <ModifyDialog open={openModify} onClose={(newText) => onModify(newText)} message={currentMessage}/>
      <DeleteDialog open={openDelete} onClose={() => onDelete()} />
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