import { useMutation } from "@apollo/react-hooks";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { CustomBackdrop, SEARCH_USERS } from "../";

export const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const useStyles = makeStyles(theme => ({
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
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    fontSize: 14,
  },
  button: { color: theme.palette.common.white, },
}));

const SignUp = props => {
  const { onSignUp, useBackdrop = false, onCancel } = props;

  const classes = useStyles();

  const [openBackdrop, setOpenBackdrop] = useState(useBackdrop);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [signUp, { loading }] = useMutation(
    SIGNUP_USER,
    {
      onCompleted: data => {
        onSignUp();
        setEmail("");
        setName("");
        setPassword("");
        setConfirm("");

        setEmailError("");
        setNameError("");
        setPasswordError("");
        setConfirmError("");
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
      setEmailError(!email ? "Enter valid email" : "");
      setNameError(!name ? "Enter valid name" : "");
      setPasswordError(!password ? "Enter password" : "");
      setConfirmError("");
      return;
    }
    if (password === confirm) {
      signUp({ variables: user });
    }
    else {
      setEmailError("");
      setNameError("");
      setPasswordError("");
      setConfirmError("Passwords do not match");
    }
  }

  return (
    <Box className={classes.root}>
      <CustomBackdrop open={openBackdrop}
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
            error={emailError !== ""}
            helperText={emailError}
            InputLabelProps={{ shrink: true, className: classes.input }}
            onChange={(event) => setEmail(event.target.value)} 
            onKeyDown={({key}) => {
              if(key === "Enter"){
                signUpUser()
              }
            }}/>
        </Grid>
        <Grid item className={classes.item}>
          <TextField className={classes.input}
            variant="outlined"
            label="NAME"
            value={name}
            error={nameError !== ""}
            helperText={nameError}
            InputLabelProps={{ shrink: true, className: classes.input }}
            onChange={(event) => setName(event.target.value)} 
            onKeyDown={({key}) => {
              if(key === "Enter"){
                signUpUser()
              }
            }}/>
        </Grid>
        <Grid className={classes.item} item>
          <TextField className={classes.input}
            variant="outlined"
            label="PASSWORD"
            value={password}
            error={passwordError !== ""}
            helperText={passwordError}
            InputLabelProps={{ shrink: true, className: classes.input }}
            type="password"
            onChange={(event) => setPassword(event.target.value)} 
            onKeyDown={({key}) => {
              if(key === "Enter"){
                signUpUser()
              }
            }}/>
        </Grid>
        <Grid item className={classes.item}>
          <TextField className={classes.input}
            variant="outlined"
            label="PASSWORD CONFIRM"
            value={confirm}
            error={confirmError !== ""}
            helperText={confirmError}
            InputLabelProps={{ shrink: true, className: classes.input }}
            type="password"
            onChange={(event) => setConfirm(event.target.value)} 
            onKeyDown={({key}) => {
              if(key === "Enter"){
                signUpUser()
              }
            }}/>
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