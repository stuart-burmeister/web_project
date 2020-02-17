import { Button, Grid, TextField, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: { display:"flex", flex:1, height:"100%", position: "relative",},
  container: { flex:1, flexDirection: "column", alignItems: "center", justifyContent: "center",},
  item: { width: 380, },
  header: { textAlign: "center", color: "#00897b", fontSize: 24, fontWeight: "bold" },
  input: { width: "100%", fontSize: 14, },
  button: { color: "#ffffff", fontSize: 14 },
}));

const SignUp = props => {
  const { onSignUp, onCancel } = props;
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  
  const signUpUser = () => {
    const user = {name: name, email: email, password: password};
    if (password === confirm){
      sessionStorage.setItem("currentUser", user);
      sessionStorage.setItem('isSignedIn', true)
      onSignUp()
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
              InputLabelProps={{ shrink: true, className: classes.input }} 
              onChange={(event) => setEmail(event.target.value)}/>
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="NAME"
              InputLabelProps={{ shrink: true, className: classes.input }}
              onChange={(event) => setName(event.target.value)}/>
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD"
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password" 
              onChange={(event) => setPassword(event.target.value)}/>
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD CONFIRM"
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password"
              onChange={(event) => setConfirm(event.target.value)}/>
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button}
            color="primary" onClick={() => signUpUser()}>
            Sign Up
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button}
            color="#c8c8c8" onClick={() => onCancel()}>
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