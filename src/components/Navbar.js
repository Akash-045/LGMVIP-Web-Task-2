// src/components/Navbar.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar'; // Import the SearchBar component

const Navbar = ({ onGetUsers, onSearch }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h1>Author's List</h1>
        </Typography>
        <SearchBar onSearch={onSearch} /> 
        <Button color="inherit" onClick={onGetUsers}>
          <h3>Get Users</h3>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
