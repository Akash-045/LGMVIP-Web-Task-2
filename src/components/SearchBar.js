import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      value={searchText}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
