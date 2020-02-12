import React, { useState } from "react";
import { Card, TextField, Button, SvgIcon } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  const { setFilter } = props;
  const [inputVal, setInputVal] = useState("");

  return (
    <div style={{width:"100%",height:"100%"}}>
      <TextField style={{width:"65%"}} variant="outlined" label="Search" onChange={({target}) => setInputVal(target.value)} value={inputVal}>
      </TextField>
      <Button style={{width:"10%",height:"100%", color:"white", backgroundColor:"#c8c8c8", marginLeft:10}} onClick={() => setFilter(inputVal)}>
        <SearchIcon fontSize="large"/>
      </Button>
    </div>
  );
}

export default SearchBar;