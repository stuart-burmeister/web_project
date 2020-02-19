import { useMutation, useQuery } from "@apollo/react-hooks";
import { Box, IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ADD_NEW_MESSAGE, DeleteDialog, ModifyDialog } from "..";
import clsx from "clsx";

const GET_USER_MESSAGES = gql`
query getMessages($email: String!) {
  getUser(email: $email) {
    messages{
      text
      date
      id
    }
  }
}
`;

const DELETE_MESSSAGE = gql`
  mutation deleteMessage($id: ID!) {
    removeMessage(id: $id)
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  container: { maxHeight: props => props.maxHeight },
  header: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#979797",
  },
  header__icon: {
    width: 20,
  },
  header__date: {
    width: "30%",
  },
  font: {
    fontWeight: "bold",
    fontSize: 14
  },
  even__row: { backgroundColor: "#979797", },
  selected__row: { backgroundColor: "#73bbff", },
  delete__icon: {
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
  const { email, filter = "", onQuery = () => { } } = props;

  const classes = useStyles(props);

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({ id: "", text: "", user: undefined });
  const [openDelete, setOpenDelete] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [newMessage, setNewMessage] = useState("");


  const { data, loading } = useQuery(GET_USER_MESSAGES, {
    variables: { email: email },
    onCompleted: data => {
    },
    onError: error => {
      alert(`Fetching message failed for ${email}: ${error.message}`);
    },
    fetchPolicy: "network-only",
  });

  const [deleteMessage] = useMutation(
    DELETE_MESSSAGE,
    {
      onCompleted: data => {
        setOpenDelete(false);
        setOpenModify(false);
        setCurrentMessage({ id: "", text: "", user: undefined });
      },
      onError: error => {
        alert("Error when deleting: " + error.message);
      },
      refetchQueries: [{ query: GET_USER_MESSAGES, variables: { email: email } },],
      awaitRefetchQueries: true,
    }
  );
  const [createMessage] = useMutation(
    ADD_NEW_MESSAGE,
    {
      onCompleted: data => {
        setOpenModify(false);
        setCurrentMessage({ id: "", text: "", user: undefined });
      },
      onError: error => {
        alert("Error when overwriting: " + error.message);
      },
      refetchQueries: [{ query: GET_USER_MESSAGES, variables: { email: email } },],
      awaitRefetchQueries: true,
    }
  );
  const [updateMessage] = useMutation(
    DELETE_MESSSAGE,
    {
      onCompleted: data => {
        createMessage({ variables: { user: email, text: newMessage } });
      },
      onError: error => {
        alert("Error when updating,: " + error.message);
      },
    }
  );

  useEffect(() => {
    if (data && data.getUser) {
      const messageList = data.getUser.messages.filter(({ text }) => text.toLowerCase().includes(filter.toLowerCase()))
      messageList.sort((a, b) => (new Date(a.date) < new Date(b.date)) ? -1 : 1);
      setMessages(messageList);
    }
  }, [data, filter]);

  useEffect(() => {
    onQuery(messages, loading);
  }, [loading, messages, onQuery]);

  const onDelete = (shouldDelete) => {
    if (shouldDelete) {
      deleteMessage({ variables: { id: currentMessage.id } });
    } else {
      setCurrentMessage({ id: "", text: "", user: undefined });
    }
    setOpenDelete(false);
  };

  const onModify = (shouldModify, newText) => {
    if (shouldModify && newText !== currentMessage.text) {
      if (!newText) {
        return;
      }
      setNewMessage(newText);
      updateMessage({ variables: { id: currentMessage.id } });
    }
    else {
      setCurrentMessage({ id: "", text: "", user: undefined });
    }
    setOpenModify(false);
  }

  const onClick = (message, setOpenDialog) => {
    setCurrentMessage(message);
    setOpenDialog(true);
  }

  return (
    <Box className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell className={clsx(classes.header, classes.header__icon)} />
              <TableCell className={clsx(classes.header, classes.header__date, classes.font)}>
                DATE
              </TableCell>
              <TableCell className={clsx(classes.header, classes.font)}>
                TEXT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !loading &&
              messages.map((row, index) => {
                var rowStyle = index % 2 ? classes.even__row : classes.odd__row;
                if (currentMessage && currentMessage.id === row.id) {
                  rowStyle = classes.selected__row;
                }
                return (
                  <TableRow key={"row-" + index} >
                    <TableCell className={clsx(classes.font, rowStyle)}>
                      <IconButton className={classes.delete__icon} onClick={() => onClick(row, setOpenDelete)} >
                        <Box >
                          X
                        </Box>
                      </IconButton>
                    </TableCell>
                    <TableCell className={clsx(classes.font, rowStyle)} onClick={() => onClick(row, setOpenModify)}>
                      {FORMAT_DATE(row.date)}
                    </TableCell>
                    <TableCell className={clsx(classes.font, rowStyle)} onClick={() => onClick(row, setOpenModify)}>
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
  email: PropTypes.string.isRequired,
  filter: PropTypes.string,
  onQuery: PropTypes.func,
  maxHeight: PropTypes.string,
};

export default MessageList;
export { GET_USER_MESSAGES };