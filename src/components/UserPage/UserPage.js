import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { ModifyUser, SignUp, UserPanel } from "../";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  input__panel: { flex: 1 },
  box: { height: "100%",},
  user__panel: { flex: 2 },
}));

const UserPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const classes = useStyle();

  const changeUser = (newUser) => {
    setSelectedUser(newUser);
    setCurrentName(newUser.username);
    setCurrentEmail(newUser.email);
  };

  var inputClass = (<SignUp onCancel={() => { }} onSignUp={() => { }} />);
  if (selectedUser !== null) {
    inputClass = <ModifyUser name={currentName} email={currentEmail}
      onCancel={() => setSelectedUser(null)} />
  }

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.input__panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          {inputClass}
        </Box>
      </Grid>
      <Grid className={classes.user__panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <UserPanel title
            selectedUser={selectedUser}
            onSelect={(user) => changeUser(user)} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserPage;