import { useMutation } from "@apollo/react-hooks";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { SEARCH_USER } from "../";

export const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const useStyles = makeStyles(() => ({
  root: { display: "flex", flex: 1, height: "100%", position: "relative", },
  container: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", },
  item: { width: 380, },
  header: { textAlign: "center", color: "#00897b", fontSize: 24, fontWeight: "bold" },
  input: { width: "100%", fontSize: 14, },
  button: { color: "#ffffff", fontSize: 14, },
}));

const SignUp = props => {
  const { onSignUp, onCancel } = props;
  const classes = useStyles();

  const [signUp, { loading, error }] = useMutation(
    SIGNUP_USER,
    {
      onCompleted(complete) {
        onSignUp();
        setEmail("");
        setName("");
        setPassword("");
        setConfirm("");
      },
      refetchQueries: [{ query: SEARCH_USER },],
    }
  );

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const signUpUser = () => {
    const user = { username: name, email: email, password: password };
    if (password === confirm) {
      signUp({ variables: user });
    }
    else {
    }
  }

  return (
    <Box className={classes.root}>
      <Grid className={classes.container} container direction="column" spacing={2}>
        <Grid item className={classes.item}>
          <Typography className={classes.header}>
            Sign Up
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="EMAIL"
              value={email}
              InputLabelProps={{ shrink: true, className: classes.input }}
              onChange={(event) => setEmail(event.target.value)} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="NAME"
              value={name}
              InputLabelProps={{ shrink: true, className: classes.input }}
              onChange={(event) => setName(event.target.value)} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD"
              value={password}
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password"
              onChange={(event) => setPassword(event.target.value)} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD CONFIRM"
              value={confirm}
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password"
              onChange={(event) => setConfirm(event.target.value)} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button}
            color="primary" onClick={() => signUpUser()} disabled={loading}>
            Sign Up
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button}
            onClick={() => onCancel()} color="secondary" disabled={loading}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default SignUp;