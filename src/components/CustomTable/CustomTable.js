import { Box, makeStyles, Table, TableBody, TableContainer, TableHead, Grid, Typography } from "@material-ui/core";
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
    display: "block",
    width: "100%",
    height: "100%",
  },
  header: {
    display: "sticky",
    height: "57px",
    width: "100%",
    borderWidth: 1,

  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "57px",
  },
  headerCell: {
    display: "flex",
    width: "100%",
    padding: "16px",
    backgroundColor: theme.palette.common.white,
    borderWidth: 1,
    borderColor: theme.palette.secondary.main,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
  body: {
    display: "block",
    overflow: "auto",
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
    padding: 16,
    fontWeight: "bold",
    fontSize: 14,
    whiteSpace: "nowrap",
  },
  even__row: { backgroundColor: theme.palette.common.white, },
  odd__row: { backgroundColor: theme.palette.secondary.main, },
  selected__row: { backgroundColor: theme.palette.select.main, },
}));

const CustomTable = props => {
  const { loading, list, selectedItem, renderHeader, renderItem, header } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid className={classes.container} container>
        <Grid className={classes.header} item>
          <Box className={classes.row}>
            {
              header.map((cell, index) => {
                if (cell.title) {
                  return (
                    <Box className={clsx(classes.headerCell, cell.className)} key={"header-" + index}>
                      <Typography className={classes.text}>
                        {cell.title}
                      </Typography>
                    </Box>
                  );
                }
                return <Box className={clsx(classes.text, cell.className)} />;
              })
            }
          </Box>
        </Grid>
        <Grid className={classes.body} component="div">
          {
            !loading &&
            list.map((row, index) => {
              var rowStyle = (index % 2 === 0) ? classes.even__row : classes.odd__row;
              const isRowSelected = selectedItem && row === selectedItem;
              if (isRowSelected) {
                rowStyle = classes.selected__row;
              }
              const items = renderItem(row, index, classes.row, clsx(classes.bodyCell, rowStyle));
              return (
                <Box className={classes.row} key={"row-" + index}>
                  {
                    items.map((element, index) =>
                      <Box className={clsx(classes.bodyCell, rowStyle)} key={"cell-" + index}>
                        {element}
                      </Box>
                    )}
                </Box>
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

CustomTable.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedItem: PropTypes.any,
  header: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    className: PropTypes.any,
  })),
  //renderHeader: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  heightOffset: PropTypes.number.isRequired,
};

export default CustomTable;