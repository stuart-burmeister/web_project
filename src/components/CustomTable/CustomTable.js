import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

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
    height: "58px",
    width: "100%",
    borderWidth: 1,
    color: theme.palette.secondary.main,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "57px",
  },
  header__cell: {
    display: "flex",
    width: "100%",
    padding: "16px",
    backgroundColor: theme.palette.common.white,
    borderWidth: 1,
    borderColor: theme.palette.secondary.main,
  },
  header__scrollbar: {
    width: "15px",
    maxWidth:"15px",
    minWidth: "15px",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    textOverflow: "ellipsis",
    overflowX: "hidden",
    color: theme.palette.common.black
  },
  body: {
    display: "block",
    overflow: "auto",
    width: "100%",
    height: "calc(100% - 58px)",
    '&::-webkit-scrollbar': {
      width: '15px',
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey["A100"],
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
    }
  },
  body__cell: {
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
  const { loading, list, selectedItem, renderItem, header, onSelect } = props;

  const classes = useStyles();

  const [bodyElement, setBodyElement] = useState(undefined);
  const [isScrolling, setIsScrolling] = useState(false);

  const onItemSelected = (item, isItemSelected) => {
    if (isItemSelected) {
      onSelect(null);
    }
    else {
      onSelect(item);
    }
  };

  useEffect(() => {
    if (bodyElement !== undefined){
      const clientHeight = bodyElement.clientHeight;
      const scrollHeight = bodyElement.scrollHeight;
      if  (clientHeight !== scrollHeight)
      {
        setIsScrolling(true);
      }
      else{
        setIsScrolling(false);
      }
    }
  }, [list,bodyElement]);

  return (
    <Box className={classes.root}>
      <Grid className={classes.container} container>
        <Grid className={classes.header} item>
          <Box className={classes.row} borderBottom={1} id="table_header">
            {
              header.map((cell, index) => {
                if (cell.title) {
                  return (
                    <Box className={clsx(classes.header__cell, cell.className)} key={"header-" + index}>
                      <Typography className={classes.text}>
                        {cell.title}
                      </Typography>
                    </Box>
                  );
                }
                return <Box className={clsx(classes.header__cell, cell.className)} key={"header-" + index} />;
              })
            }
            {
              isScrolling && <Box className={classes.header__scrollbar}/>
            }
          </Box>
        </Grid>
        <Grid className={classes.body} id="table_body" component="div" ref={(divElement) => {setBodyElement(divElement) }}>
          {
            !loading &&
            list.map((row, index) => {
              var rowStyle = (index % 2 === 0) ? classes.even__row : classes.odd__row;
              const isRowSelected = selectedItem && row === selectedItem;
              if (isRowSelected) {
                rowStyle = classes.selected__row;
              }
              const items = renderItem(row, index, classes.text);
              return (
                <Box className={classes.row} key={"row-" + index}>
                  {
                    items.map((element, index) =>
                      <Box className={clsx(classes.body__cell, rowStyle, header[index].className)}
                        key={"cell-" + index}
                        onClick={() => header[index].selectable && onSelect ? onItemSelected(row, isRowSelected) : {}}>
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
  onSelect: PropTypes.func,
  header: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    className: PropTypes.any,
    selectable: PropTypes.bool,
  })),
  renderItem: PropTypes.func.isRequired,
};

export default CustomTable;