import React, { useState } from "react";
import { Card, TextField, Button, SvgIcon } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  const { setFilter } = props;
  const [inputVal, setInputVal] = useState("");

  return (
    <Card>
      <TextField variant="outlined" label="Search" onChange={(newValue) => setInputVal(newValue)} value={inputVal}>
      </TextField>
      <Button onClick={() => setFilter(inputVal)}>
        <SearchIcon />
      </Button>
    </Card>
  );
}

export default SearchBar;