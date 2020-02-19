import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { MessagePanel } from "./components/";
import { UserPanel } from "../";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  user__panel: { flex: 1 },
  box: { height: "100%", },
  message__panel: { flex: 2 },
  empty__panel: {
    display: "flex", height: "100%", width: "100%",
    alignItems: "center", justifyContent: "center", backgroundColor: "black",
  },
  message: { fontWeight: "bold" }
}));

const MainPage = () => {
  const classes = useStyle();
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.user__panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          <UserPanel selectedUser={currentUser} onSelect={(newUser) => setCurrentUser(newUser)} />
        </Box>
      </Grid>
      <Grid className={classes.message__panel} item>
        <Box className={classes.box} border={1} borderColor={"#979797"}>
          {
            currentUser ?
              <MessagePanel title email={currentUser.email} /> :
              <Box className={classes.empty__panel}>
                <Typography className={classes.message} color="primary">
                  Select an item on the left.
              </Typography>
              </Box>
          }
        </Box>
      </Grid>
    </Grid>
  );

};

export default MainPage;