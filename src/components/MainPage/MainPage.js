import { Box, Grid, makeStyles } from "@material-ui/core";
import React, {useState} from "react";
import { MessagePanel } from "./components/";
import { UserPanel } from "../";

const useStyle = makeStyles(() => ({
  root: { display: "flex", width: "100%", height: "100%", flexDirection: "row" },
  user__panel: { flex: 1 },
  box: { height: "100%", },
  message__panel: { flex: 2 },
}));

const MainPage = () => {
  const classes = useStyle();
  const [currentUser, setCurrentUser] = useState(null)
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
            currentUser &&
            <MessagePanel title messages={currentUser.messages} />
          }
        </Box>
      </Grid>
    </Grid>
  );

};

export default MainPage;