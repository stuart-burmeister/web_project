import { Box, makeStyles, Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  container: {
    maxHeight: props => `calc(100vh - ${props.heightOffset}px)`,
    '&::-webkit-scrollbar': {
      width: '15px',
      borderLeft: `1px solid ${theme.palette.secondary.main}`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
    }
  },
  header: {
    height: "50",
    fontWeight: "bold",
    backgroundColor: theme.palette.common.white,
    borderWidth: 1,
    borderColor: theme.palette.secondary.main,
  },
  font: {
    fontWeight: "bold",
    fontSize: 14
  },
  even__row: { backgroundColor: theme.palette.rows.odd, },
  odd__row: { backgroundColor: theme.palette.rows.even, },
  selected__row: { backgroundColor: theme.palette.select.main, },
}));

const CustomTable = props => {
  const { loading, list, selectedItem, renderHeader, renderItem, } = props;

  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <Table stickyHeader>
        <TableHead >
          {
            renderHeader(classes.header)
          }
        </TableHead>
      </Table>
      <TableContainer className={classes.container}>
        <Table>
          <TableBody>
            {
              !loading &&
              list.map((row, index) => {
                var rowStyle = (index % 2 === 0) ? classes.even__row : classes.odd__row;
                const isRowSelected = selectedItem && row === selectedItem;
                if (isRowSelected) {
                  rowStyle = classes.selected__row;
                }
                return (renderItem(row, index, clsx(classes.font, rowStyle)))
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