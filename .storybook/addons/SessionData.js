import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import React, { Fragment, useState } from "react";
import { Button } from "@material-ui/core";

const Content = () => {
  //const currentUser = sessionStorage.getItem("currentUser");

  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("currentUser"));

  return (
    <Fragment>
      {
        `Current User Email: ${currentUser}`
      }
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