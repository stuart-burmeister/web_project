import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { CustomTable } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    height: 300,
    width: 500,
  },
  header__index: {
    width: 100,
  },
  header__user: {
    width: "100%"
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
const longData = {
  user: "ThisIsALongNameForTestingWhatHappensToTheNextFieldIfThisIsTooLong",
  value: "TestForReallyLongDataAndToSeeHowTheTableReactsWhenInputted"
};

const defaultData = [
  dummyData,
  dummyData,
  dummyData,
  dummyData,
  dummyData,
  dummyData,
  dummyData,
];

const overflowData = [
  longData,
  longData,
  longData,
  longData,
  longData,
  longData,
  longData,
  longData,
];



export const Default = () => {
  const classes = useStyles();

  const headerData = [
    { title: "INDEX", className: classes.header__index },
    { title: "VALUE", }
  ];

  return (
    <Box border={1} className={classes.root}>
      <CustomTable list={defaultData}
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

export const LongField = () => {
  const classes = useStyles();

  const headerData = [
    { title: "USER", className: classes.header__user },
    { title: "VALUE", }
  ];

  return (
    <Box border={1} className={classes.root}>
      <CustomTable list={overflowData}
        header={headerData}
        renderItem={(row, index, textStyle) => [
          <Typography className={textStyle}>
            {row.user}
          </Typography>,
          <Typography className={textStyle}>
            {row.value}
          </Typography>
        ]} />
    </Box>
  );
};