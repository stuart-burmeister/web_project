import React from "react";
import { NavBar } from "../../components";
import { useState } from "react";

export default {
  component: NavBar,
  title: "NavBar",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const [index, setIndex] = useState(0);
  return <NavBar tabIndex={index}/>
}