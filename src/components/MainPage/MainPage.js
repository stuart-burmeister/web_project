import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { UserPanel } from "../";
import { MessagePanel } from "./components/";


const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "calc(100vw - 130px)",
    height: "calc(100vh - 50px)",
    flexDirection:"row",
  },
  user__panel: {
    flex: 1,
    height: "100%",
    width: "calc((100% - 25px) * 0.3)",
    marginRight: "13px",
  },
  box: {
    height: "100%",
    width: "100%",
    borderWidth: "1px",
    borderColor: theme.palette.secondary.main,
  },
  message__panel: {
    flex: 2,
    height: "100%",
    width: "calc((100% - 26px) * 0.3)",
    marginLeft: "13px",
  },
  empty__panel: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.common.black,
  },
  message: {
    fontWeight: "bold",
    textAlign: "center",
  }
}));

const MainPage = () => {
  const classes = useStyle();
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Box className={classes.root}>
      <Grid className={classes.root}
        container>
        <Grid className={classes.user__panel} item>
          <Box className={classes.box}
            border={1}>
            <UserPanel maxHeight="calc(100vh - 100px)"
              selectedUser={currentUser}
              onSelect={(newUser) => setCurrentUser(newUser)} />
          </Box>
        </Grid>
        <Grid className={classes.message__panel} item>
          <Box className={classes.box}
            border={1}>
            {
              currentUser ?
                <MessagePanel title email={currentUser.email} /> :
                <Box className={clsx(classes.root, classes.empty__panel)}>
                  <Typography className={classes.message} color="primary">
                    Select an item on the left.
                  </Typography>
                </Box>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;