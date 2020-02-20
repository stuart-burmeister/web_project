import { useMutation } from "@apollo/react-hooks";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Backdrop, SEARCH_USERS } from "../";

export const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flex: 1,
    height: "100%",
    position: "relative",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  item: { width: 380, },
  header: {
    textAlign: "center",
    color: "#00897b",
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    fontSize: 14,
  },
  button: { color: "#ffffff", },
}));

const SignUp = props => {
  const { onSignUp, useBackdrop = false, onCancel } = props;

  const classes = useStyles();

  const [openBackdrop, setOpenBackdrop] = useState(useBackdrop);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [signUp, { loading }] = useMutation(
    SIGNUP_USER,
    {
      onCompleted: data => {
        onSignUp();
        setEmail("");
        setName("");
        setPassword("");
        setConfirm("");
      },
      onError: error => {
        alert("Sign Up failed: " + error.message);
      },
      refetchQueries: [{ query: SEARCH_USERS },],
      awaitRefetchQueries: true,
    }
  );

  const signUpUser = () => {
    const user = { username: name, email: email, password: password };
    if (!name || !email || !password) {
      return;
    }
    if (password === confirm) {
      signUp({ variables: user });
    }
  }

  return (
    <Box className={classes.root}>
      <Backdrop open={openBackdrop}
        title="Welcome to Vatech!"
        onClick={() => setOpenBackdrop(false)}/>
      <Grid className={classes.container}
        container
        direction="column"
        spacing={2}>
        <Grid className={classes.item} item>
          <Typography className={classes.header}>
            Sign Up
          </Typography>
        </Grid>
        <Grid className={classes.item} item>
          <TextField className={classes.input}
            variant="outlined"
            label="EMAIL"
            value={email}
            InputLabelProps={{ shrink: true, className: classes.input }}
            onChange={(event) => setEmail(event.target.value)} />
        </Grid>
        <Grid item className={classes.item}>
          <TextField className={classes.input}
            variant="outlined"
            label="NAME"
            value={name}
            InputLabelProps={{ shrink: true, className: classes.input }}
            onChange={(event) => setName(event.target.value)} />
        </Grid>
        <Grid className={classes.item} item>
          <TextField className={classes.input}
            variant="outlined"
            label="PASSWORD"
            value={password}
            InputLabelProps={{ shrink: true, className: classes.input }}
            type="password"
            onChange={(event) => setPassword(event.target.value)} />
        </Grid>
        <Grid item className={classes.item}>
          <TextField className={classes.input}
            variant="outlined"
            label="PASSWORD CONFIRM"
            value={confirm}
            InputLabelProps={{ shrink: true, className: classes.input }}
            type="password"
            onChange={(event) => setConfirm(event.target.value)} />
        </Grid>
        <Grid className={classes.item} item>
          <Button className={classes.button}
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => signUpUser()}
            disabled={loading}>
            Sign Up
          </Button>
        </Grid>
        <Grid className={classes.item} item>
          <Button className={clsx(classes.button, classes.input)}
            variant="contained"
            fullWidth
            onClick={() => useBackdrop ? setOpenBackdrop(true) : onCancel()}
            color="secondary"
            disabled={loading}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  openBackdrop: PropTypes.bool,
}

export default SignUp;