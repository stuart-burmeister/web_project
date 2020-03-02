import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { CustomBackdrop, ModifyUser, SignUp, UserPanel } from "../";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "calc(100vw - 130px)",
    height: "calc(100vh - 50px)",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  input__panel: {
    flex: 2,
    width: "calc((100% - 25px) * 0.4)",
    minWidth: "380px",
    height: "100%",
    marginRight: "25px",
    position: "relative",
  },
  box: {
    width: "100%",
    height: "100%",
    borderColor: theme.palette.secondary.main,
  },
  user__panel: {
    flex: 3,
    width: "calc((100% - 25px) * 0.6)",
    minWidth: "300px",
    height: "100%",
  },
}));

const UserPage = () => {
  const classes = useStyle();

  const [selectedUser, setSelectedUser] = useState(null);
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [openBackdrop, setOpenBackdrop] = useState(true);

  const changeUser = (newUser) => {
    setSelectedUser(newUser);
    if (newUser) {
      setCurrentName(newUser.username);
      setCurrentEmail(newUser.email);
    }
  };

  var inputClass = (<SignUp onCancel={() => setOpenBackdrop(true)} onSignUp={() => { }} />);
  if (selectedUser !== null) {
    inputClass = <ModifyUser name={currentName} email={currentEmail}
      onCancel={() => changeUser(null)} />
      if (openBackdrop){
        setOpenBackdrop(false);
      }
  }

  return (
    <Grid className={classes.root}
      container>
      <Grid className={classes.input__panel} item>
        <Box className={classes.box}
          border={1}>
          <CustomBackdrop open={openBackdrop}
            title="Welcome to Vatech!"
            onClick={() => setOpenBackdrop(false)} />
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