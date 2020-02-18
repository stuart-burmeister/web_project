import { Button, Grid, TextField, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { DeleteDialog, SEARCH_USERS } from "../"
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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
  root: { display:"flex", flex:1, height:"100%", position: "relative",},
  container: { flexDirection: "column", flex:1, alignItems: "center", justifyContent: "center",},
  item: { width: 380, },
  header: { textAlign: "center", color: "#00897b", fontSize: 24, fontWeight: "bold" },
  input: { width: "100%", fontSize: 14, },
  button: { color: "#ffffff", fontSize: 14 },
}));

const ModifyUser = props => {
  const { name, email, onCancel } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    setInputName(name);
    setInputEmail(email);
  },[name, email])

  const classes = useStyles();

  const [deleteUser] = useMutation(
    DELETE_USER,
    {
      onCompleted(){
        setOpenDialog(false);
        onCancel()
      },
      onError(error){
        alert("Could not delete user: " + error.message);
      },
      refetchQueries: [{ query: SEARCH_USERS},],
    }
  );

  const [createUser] = useMutation(
    CREATE_USER,
    {
      onCompleted(){
      },
      onError(error){
        alert("Could not update user: " + error.message)
      },
      refetchQueries: [{ query: SEARCH_USERS},],
    }
  );

  const onDelete = (shouldDelete) => {
    if (shouldDelete)
    {
      deleteUser({ variables: { email: email } });
    }
    else{
      setOpenDialog(false);
    }
  };

  const onModify = () => {
    if(password == confirm){
      deleteUser({ variables: { email: email } }).then(() =>{
        createUser({variables: { email: inputEmail, username: inputName, password: password}})
      });
    }
    else{

    }
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.container} container direction="column" spacing={2}>
        <Grid item className={classes.item}>
          <Typography className={classes.header}>
            Modify
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="EMAIL"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
              InputLabelProps={{ shrink: true, className: classes.input }} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="NAME"
              value={inputName}
              onChange={(event) => setInputName(event.target.value)}
              InputLabelProps={{ shrink: true, className: classes.input }} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD"
              onChange={(event) => setPassword(event.target.value)}
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password" />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD CONFIRM"
              onChange={(event) => setConfirm(event.target.value)}
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password" />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="primary" onClick={() => onModify()}>
            Save
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="secondary" onClick={() => setOpenDialog(true)}>
            Delete
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="secondary" onClick={() => onCancel()}>
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