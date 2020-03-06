import { Box, makeStyles, Typography } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { CustomTable } from "../../components";

const useStyles = makeStyles(() => ({
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
}));

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
  { id: 1, ...dummyData },
  { id: 2, ...dummyData },
  { id: 3, ...dummyData },
  { id: 4, ...dummyData },
  { id: 5, ...dummyData },
  { id: 6, ...dummyData },
  { id: 7, ...dummyData },
];

const overflowData = [
  { id: 1, ...longData },
  { id: 2, ...longData },
  { id: 3, ...longData },
  { id: 4, ...longData },
  { id: 5, ...longData },
  { id: 6, ...longData },
  { id: 7, ...longData },
];



export const Default = () => {
  const classes = useStyles();

  const [currentRow, setCurrentRow] = useState(undefined);

  const headerData = [
    { title: "INDEX", className: classes.header__index, selectable: true },
    { title: "VALUE", selectable: true }
  ];

  const onSelect = (element) => {
    setCurrentRow(element);
    action("selected")(element)
  }

  return (
    <Box border={1} className={classes.root}>
      <CustomTable
        selectedItem={currentRow}
        onSelect={(row) => onSelect(row)}
        list={defaultData}
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

  const [currentRow, setCurrentRow] = useState(undefined);

  const headerData = [
    { title: "USER", className: classes.header__user, selectable: true },
    { title: "VALUE", selectable: true }
  ];

  const onSelect = (element) => {
    setCurrentRow(element);
    action("selected")(element)
  }

  return (
    <Box border={1} className={classes.root}>
      <CustomTable
        selectedItem={currentRow}
        onSelect={(row) => onSelect(row)}
        list={overflowData}
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