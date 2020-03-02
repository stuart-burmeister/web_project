import React, { useState } from "react";
import { NavBar } from "../../components";

export default {
  component: NavBar,
  title: "NavBar",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const [index, setIndex] = useState(0);

  return <NavBar tabIndex={index} onChange={(newValue) => setIndex(newValue)} />
}