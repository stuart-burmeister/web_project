import React from "react";
import { CustomTable } from "../../components";
import { TableRow, TableCell, Grid, Box, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    width: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  }
}))

export default {
  component: CustomTable,
  title: "Table",
  excludeStories: /.*Data$/,
};

const dummyData = { value: "Example Text" }

const defaultData = [
  dummyData,
  dummyData,
  dummyData,
  dummyData,
  dummyData,
  dummyData,
  dummyData,
];



export const Default = () => {
  const classes = useStyles();

  const headerData = [
    { title: "INDEX", className: classes.root },
    { title: "VALUE", }
  ];

  return (
    <Box style={{ height: 300, width: 500 }}>
      <CustomTable list={defaultData}
        heightOffset={100}
        header={headerData}
        renderItem={(row, index, textStyle) => [
          <Typography className={textStyle}>
            {index}
          </Typography>,
          <Typography className={textStyle}>
            {row.value}
          </Typography>
        ]} />
    </Box>
  );
}