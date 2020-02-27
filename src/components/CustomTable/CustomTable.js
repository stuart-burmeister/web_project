import { Box, makeStyles, Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  container: {
    width: "100%",
    height:"100%",
  },
  header:{
    height: "24px",
    width: "100%",
  },
  row: {
    display: "flex",
  },
  headerCell: {
    display: "block",
    height: "24px",
    width: "100%",
    fontWeight: "bold",
    backgroundColor: theme.palette.common.white,
    borderWidth: 1,
    borderColor: theme.palette.secondary.main,
  },
  body: {
    display: "block",
    width: "100%",
    height: "calc(100% - 57px)",
    '&::-webkit-scrollbar': {
      width: '15px',
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey["A100"],
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
    }
  },
  bodyCell: {
    display: "block",
    overflowX: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    maxHeight: "25px",
    fontWeight: "bold",
    fontSize: 14,
    whiteSpace: "nowrap",
  },
  even__row: { backgroundColor: theme.palette.common.white, },
  odd__row: { backgroundColor: theme.palette.secondary.main, },
  selected__row: { backgroundColor: theme.palette.select.main, },
}));

const CustomTable = props => {
  const { loading, list, selectedItem, renderHeader, renderItem, } = props;

  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <TableContainer className={classes.container} component="div">
        <Table className={classes.container} stickyHeader component="div">
          <TableHead className={classes.header} component="div">
            {
              renderHeader(classes.row, classes.headerCell)
            }
          </TableHead>
          <TableBody className={classes.body} component="div">
            {
              !loading &&
              list.map((row, index) => {
                var rowStyle = (index % 2 === 0) ? classes.even__row : classes.odd__row;
                const isRowSelected = selectedItem && row === selectedItem;
                if (isRowSelected) {
                  rowStyle = classes.selected__row;
                }
                return (renderItem(row, index, classes.row, clsx(classes.bodyCell, rowStyle)))
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

CustomTable.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedItem: PropTypes.any,
  renderHeader: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  heightOffset: PropTypes.number.isRequired,
};

export default CustomTable;