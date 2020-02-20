import { useMutation } from "@apollo/react-hooks";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { DeleteDialog, SEARCH_USERS } from "../";

const DELETE_USER = gql`
  mutation deleteUser($email: String!){
    removeUser(email: $email)
  }
`;

const CREATE_USER = gql`
  mutation createUser($email: String!, $username: String!, $password: String!){
    createUser(email: $email, username: $username, password: $password)
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "flex",
    flex: 1,
    height: "100%",
  },
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: { width: 380, },
  header: {
    textAlign: "center",
    color: "#00897b",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    fontSize: 14,
  },
  button: {
    color: "#ffffff",
    fontSize: 14,
  },
}));

const ModifyUser = props => {
  const { name, email, onCancel } = props;

  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [deleteUser, { loading: deleteLoading }] = useMutation(
    DELETE_USER,
    {
      onCompleted: data => {
        setOpenDialog(false);
        onCancel()
      },
      onError: error => {
        alert("Could not delete user: " + error.message);
      },
      refetchQueries: [{ query: SEARCH_USERS },],
    }
  );
  const [createUser, { loading: createLoading }] = useMutation(
    CREATE_USER,
    {
      onCompleted: data => {
        onCancel()
      },
      onError: error => {
        alert("Could not update user: " + error.message)
      },
      refetchQueries: [{ query: SEARCH_USERS },],
      awaitRefetchQueries: true,
    }
  );
  const [updateUser, {loading: updateLoading}] = useMutation(
    DELETE_USER,
    {
      onCompleted: data => {
        createUser({ variables: { email: inputEmail, username: inputName, password: password } })
      },
      onError: error => {
        alert("Could not update user: " + error.message);
      },
    }
  );

  const onDelete = (shouldDelete) => {
    if (shouldDelete) {
      deleteUser({ variables: { email: email } });
    }
    else {
      setOpenDialog(false);
    }
  };
  const onModify = () => {
    if (!inputEmail || !inputName || !password){
      return;
    }
    if (password === confirm && password.length >0) {
      updateUser({ variables: { email: email } });
    }
  };

  const isLoading = deleteLoading || createLoading || updateLoading;

  useEffect(() => {
    setInputName(name);
    setInputEmail(email);
  }, [name, email])

  return (
    <Box className={classes.root}>
      <Grid className={classes.container} container direction="column" spacing={2}>
        <Grid item className={classes.item}>
          <Typography className={classes.header}>
            Modify
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <TextField className={classes.input}
            variant="outlined"
            label="EMAIL"
            disabled={isLoading}
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
            InputLabelProps={{ shrink: true, className: classes.input }} />
        </Grid>
        <Grid item className={classes.item}>
          <TextField className={classes.input}
            variant="outlined"
            label="NAME"
            disabled={isLoading}
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            InputLabelProps={{ shrink: true, className: classes.input }} />
        </Grid>
        <Grid item className={classes.item}>
          <TextField variant="outlined" className={classes.input}
            label="PASSWORD"
            disabled={isLoading}
            onChange={(event) => setPassword(event.target.value)}
            InputLabelProps={{ shrink: true, className: classes.input }}
            type="password" />
        </Grid>
        <Grid item className={classes.item}>
          <TextField variant="outlined" className={classes.input}
            label="PASSWORD CONFIRM"
            disabled={isLoading}
            onChange={(event) => setConfirm(event.target.value)}
            InputLabelProps={{ shrink: true, className: classes.input }}
            type="password" />
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="primary" disabled={isLoading} onClick={() => onModify()}>
            Save
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="secondary" disabled={isLoading} onClick={() => setOpenDialog(true)}>
            Delete
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="secondary" disabled={isLoading} onClick={() => onCancel()}>
            Cancel
          </Button>
        </Grid>
      </Grid>
      <DeleteDialog open={openDialog} onClose={(shouldDelete) => onDelete(shouldDelete)} />
    </Box>
  );
}

ModifyUser.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default ModifyUser;