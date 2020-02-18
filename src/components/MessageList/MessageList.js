import { useMutation } from "@apollo/react-hooks";
import { Box, IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { ADD_NEW_MESSAGE, DeleteDialog, GET_USER_MESSAGES, ModifyDialog } from "..";

const DELETE_MESSSAGE = gql`
mutation deleteMessage($id: ID!) {
  removeMessage(id: $id)
}
`;

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
  const [currentMessage, setCurrentMessage] = useState({ id: "", text: "", user: undefined });
  const [openDelete, setOpenDelete] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const email = sessionStorage.getItem("currentUser");

  const [deleteMessage] = useMutation(
    DELETE_MESSSAGE,
    {
      onCompleted(complete) {
        setOpenDelete(false);
        setCurrentMessage({ id: "", text: "", user: undefined });
      },
      onError(error) {
        alert(error);
      },
      refetchQueries: [{ query: GET_USER_MESSAGES, variables: { email: email } }],
    }
  );

  const [createMessage] = useMutation(
    ADD_NEW_MESSAGE,
    {
      onCompleted(complete) {
        setOpenModify(false);
        setCurrentMessage({ id: "", text: "", user: undefined });
      },
      onError(error) {
        alert(error);
      },
      refetchQueries: [{ query: GET_USER_MESSAGES, variables: { email: email } }],
    }
  )

  const onDelete = (shouldDelete) => {
    if (shouldDelete) {
      deleteMessage({ variables: { id: currentMessage.id } });
    } else {
      setCurrentMessage({ id: "", text: "", user: undefined });
    }
    setOpenDelete(false);
  };

  const onModify = (shouldModify, newText) => {
    if (shouldModify) {
      deleteMessage({ variables: { id: currentMessage.id } })
      createMessage({ variables: { user: email, text: newText } });
    }
    else {
      setCurrentMessage({ id: "", text: "", user: undefined });
    }
    setOpenModify(false);
  }

  return (
    <Box className={classes.root}>
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
                if (currentMessage && currentMessage.id === row.id) {
                  rowStyle = classes.selected__row;
                }
                return (
                  <TableRow key={"row-" + index} >
                    <TableCell className={rowStyle}>
                      <IconButton className={classes.oval} onClick={() => {
                        setCurrentMessage(row);
                        setOpenDelete(true);
                      }} >
                        <Box >
                          X
                        </Box>
                      </IconButton>
                    </TableCell>
                    <TableCell className={rowStyle}>
                      {FORMAT_DATE(row.date)}
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
      <ModifyDialog open={openModify} onClose={(shouldModify, newText) => onModify(shouldModify, newText)} message={currentMessage} />
      <DeleteDialog open={openDelete} onClose={(shouldDelete) => onDelete(shouldDelete)} />
    </Box>
  );
};

const FORMAT_DATE = (date) => {
  var formattedDate = new Date(date)
  const year = formattedDate.getFullYear();
  const month = formattedDate.getMonth() + 1;
  const day = formattedDate.getDate();
  return (year + "/" + ((month < 10) ? ("0" + month) : month) + "/" + ((day < 10) ? ("0" + day) : day));
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.any,
  })),
  maxHeight: PropTypes.string,
};

export default MessageList;