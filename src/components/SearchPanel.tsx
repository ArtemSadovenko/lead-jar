import React from 'react'
import Container from '@mui/material/Container'
// import { Search } from '@mui/material/Icon';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import SearchIcon from '../statis/icons/SearchIcon';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

function SearchPanel() {
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', m: '7px 0px 0px 4px', display: 'flex', alignItems: 'center', width: 400 }}
  >
 
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
    />
    <IconButton type="button" sx={{ p: '6px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    
  </Paper>
  )
}

export default SearchPanel
