import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  input__field: {
    maxWidth: 330,
    height: 56,
    flex: 1
  },
  button: {
    width: 56,
    height: 56,
    marginLeft: 10,
  },
  icon: { color: theme.palette.common.white }
}));

const SearchBar = (props) => {
  const { setFilter } = props;
  
  const classes = useStyles();

  const [inputVal, setInputVal] = useState("");
  return (
    <Box className={classes.root}>
      <TextField
        className={classes.input__field}
        variant="outlined"
        label="Search"
        onChange={({ target }) => setInputVal(target.value)}
        value={inputVal}/>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => setFilter(inputVal)}>
        <SearchIcon className={classes.icon} fontSize="large" />
      </Button>
    </Box>
  );
}

SearchBar.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default SearchBar;