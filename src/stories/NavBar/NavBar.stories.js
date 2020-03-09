import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { NavBar } from "../../components";

export default {
  component: NavBar,
  title: "NavBar",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const [index, setIndex] = useState(0);

  const onChange = (newValue) => {
    setIndex(newValue)
    action("Change Tab")(newValue);
  }

  return <NavBar tabIndex={index} onChange={(newValue) => onChange(newValue)} />
}