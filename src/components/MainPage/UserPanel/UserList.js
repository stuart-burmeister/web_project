import React from "react";
import { Typography, Box } from "@material-ui/core";

const UserList = props => {
  const { filter } = props;
  return (
    <div style={{ display: "flex", height: "100%", width: "100%", borderColor: "#979797", flexDirection: "column", }}>
      <Box borderBottom={1} color={"#979797"} style={{ display: "flex", height: 48, flexDirection: "row", alignItems: "center", }}>
        <Typography style={{ width: 253, paddingLeft: 23, fontWeight: "bold", color: "black" }}>
          EMAIL
        </Typography>
        <Typography style={{ fontWeight: "bold" , color: "black"}}>
          NAME
        </Typography>
      </Box>
      <div style={{ flex: 1, flexDirection: "column", }}>
        
      </div>
    </div>
  );
};

export default UserList;