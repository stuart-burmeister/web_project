import { useMutation } from "@apollo/react-hooks";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React, { useState } from "react";

export const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const useStyles = makeStyles(() => ({
  root: { display: "flex", flex: 1, height: "100%", position: "relative", },
  container: { flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center", },
  item: { width: 380, },
  header: { textAlign: "center", color: "#00897b", fontSize: 24, fontWeight: "bold" },
  input: { width: "100%", fontSize: 14 },
  button: { color: "#ffffff", fontSize: 14 },
  link: { alignSelf: "left", fontSize: 14 }
}));

const SignIn = props => {
  const { onSignIn, onSignUpClick } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signin, { loading, error }] = useMutation(
    SIGNIN_USER,
    {
      onCompleted(complete) {
        sessionStorage.setItem('isSignedIn', true);
        sessionStorage.setItem('currentUser',email);
        onSignIn();
      },
      onError(error) {
        // handle error
      }
    }
  );

  const signInAccount = () => {
    const user = { email: email, password: password };
    signin({ variables: user });
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid className={classes.container} container direction="column" spacing={2}>
        <Grid item className={classes.item}>
          <Typography className={classes.header}>
            Sign In
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="EMAIL"
              InputLabelProps={{ shrink: true, className: classes.input }}
              onChange={(event) => setEmail(event.target.value)} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD"
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password"
              onChange={(event) => setPassword(event.target.value)} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="primary" onClick={() => signInAccount()}>
            Sign In
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button className={classes.link} onClick={() => onSignUpClick()} disabled={loading}>
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
}

export default SignIn;