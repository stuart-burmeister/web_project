import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: { height: "100%", position: "relative" },
  container: { flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center" },
  item: { width: 380, },
  header: { textAlign: "center", color: "#00897b", fontSize: 24, fontWeight: "bold" },
  input: { width: "100%", fontSize: 14, },
  button: { color: "#ffffff", fontSize: 14 },
}));

const SignUp = props => {
  const { onSignUp, onCancel } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
              InputLabelProps={{ shrink: true, className: classes.input }} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="NAME"
              InputLabelProps={{ shrink: true, className: classes.input }} />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD"
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password" />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <form>
            <TextField variant="outlined" className={classes.input}
              label="PASSWORD CONFIRM"
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password" />
          </form>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} color="primary">
            Sign Up
          </Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant="contained" fullWidth className={classes.button} style={{ backgroundColor: "#c8c8c8" }}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;