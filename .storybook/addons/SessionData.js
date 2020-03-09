
import { Button, Typography } from "@material-ui/core";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import React, { Fragment, useState } from "react";

const Content = () => {
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("currentUser"));

  return (
    <Fragment>
      <Typography>
        {
          `Current User Email: ${currentUser}`
        }
      </Typography>
      <Button variant="contained" onClick={() => setCurrentUser(sessionStorage.getItem("currentUser"))}>
        Refresh User
      </Button>
    </Fragment>
  );
};

addons.register("storybook/SessionData", () => {
  addons.add("SessionData/panel", {
    title: "SessionData",
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content />
      </AddonPanel>
    )
  });
});