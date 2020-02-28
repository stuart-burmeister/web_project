import React from "react";
import { SearchBar } from "../../components";

export default {
  component: SearchBar,
  title: "Search Bar",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <SearchBar setFilter={(filter)=>{
    console.log("Filter for: " + filter);
  }}/>
}