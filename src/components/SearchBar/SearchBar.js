import { Button, makeStyles, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  root: { width: "100%", height: "100%", justifyContent: 'center',},
  inputField: { width: "65%" },
  button: { width: "10%", color: "white", backgroundColor: "#c8c8c8", marginLeft: 10 }
}));

const SearchBar = (props) => {
  const { setFilter } = props;
  const [inputVal, setInputVal] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField className={classes.inputField} variant="outlined" label="Search" onChange={({ target }) => setInputVal(target.value)} value={inputVal}>
      </TextField>
      <Button className={classes.button} onClick={() => setFilter(inputVal)}>
        <SearchIcon fontSize="large" />
      </Button>
    </div>
  );
}

export default SearchBar;