import React from "react";
import { CustomTable } from "../../components";
import { TableRow, TableCell } from "@material-ui/core";

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
  return (
    <CustomTable list={defaultData}
      heightOffset={100}
      renderHeader={(rowStyle, cellStyle) =>
        <TableRow className={rowStyle} component="div">
          <TableCell className={cellStyle} component="div">
            Index
          </TableCell>
          <TableCell className={cellStyle} component="div">
            Value
          </TableCell>
        </TableRow>
      }
      renderItem={(row, index, rowStyle, cellStyle) =>
        <TableRow className={rowStyle} component="div" key={"row-"+index}>
          <TableCell className={cellStyle} component="div">
            {index}
          </TableCell>
          <TableCell className={cellStyle} component="div">
            {row.value}
          </TableCell>
        </TableRow>
      }
    />);
}