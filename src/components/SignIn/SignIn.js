import React from "react";
import { Grid, Input, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: { backgroundColor: "#fffff0", height: "100%", position: "relative", alignItems: "center", justifyContent: "center", flexDirection: "column" },
  container: { flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center" },
  header: { textAlign: "center", color: "#00897b", fontFamily: "AppleSDGothicNeo", fontSize: 24, fontWeight: "bold" },
  input: { fontFamily: "AppleSDGothicNeo", fontSize: 14, color: "#979797", justifySelf: "center" },
  button: { fontFamily: "AppleSDGothicNeo", flex: 1, backgroundColor: "#00897b", color: "#ffffff" },

}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.container} container direction="column" spacing={2}>
        <Grid item>
          <Typography className={classes.header}>
            Sign In
          </Typography>
        </Grid>
        <Grid item>
          <form>
            <TextField className={classes.input}
              variant="outlined"
              label="EMAIL"
              InputLabelProps={{ shrink: true, className: classes.input }} />
          </form>
        </Grid>
        <Grid item>
          <form>
            <TextField variant="outlined"
              label="PASSWORD"
              InputLabelProps={{ shrink: true, className: classes.input }}
              type="password" />
          </form>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.button}>
            Sign In
          </Button>
        </Grid>
      </Grid>
      <Typography>
        Sign up
      </Typography>
    </div>
  );
}

export default SignIn;