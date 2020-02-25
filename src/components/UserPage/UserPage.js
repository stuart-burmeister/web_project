import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { ModifyUser, SignUp, UserPanel } from "../";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  input__panel: {
    flex: 2,
    maxWidth: "calc((100vw - 130px) * 0.4)",
    paddingRight: "12px",
  },
  box: {
    height: "100%",
    borderColor: theme.palette.secondary.main,
  },
  user__panel: {
    flex: 3,
    maxWidth: "calc((100vw - 130px) * 0.6)",
    paddingLeft: "12px",
  },
}));

const UserPage = () => {
  const classes = useStyle();

  const [selectedUser, setSelectedUser] = useState(null);
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const changeUser = (newUser) => {
    setSelectedUser(newUser);
    if (newUser) {
      setCurrentName(newUser.username);
      setCurrentEmail(newUser.email);
    }
  };

  var inputClass = (<SignUp onCancel={() => { }} onSignUp={() => { }} useBackdrop={true} />);
  if (selectedUser !== null) {
    inputClass = <ModifyUser name={currentName} email={currentEmail}
      onCancel={() => changeUser(null)} />
  }

  return (
    <Grid className={classes.root}
      container>
      <Grid className={classes.input__panel} item>
        <Box className={classes.box}
          border={1}>
          {inputClass}
        </Box>
      </Grid>
      <Grid className={classes.user__panel} item>
        <Box className={classes.box}
          border={1}>
          <UserPanel title
            selectedUser={selectedUser}
            onSelect={(user) => changeUser(user)} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserPage;