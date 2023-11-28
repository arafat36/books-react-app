import React from 'react'
import { Search } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'

function SearchField({ search, handleSearch }) {
  return (
    <Box>
      <TextField
        fullWidth
        label="Search"
        value={search}
        onChange={handleSearch}
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
              <IconButton edge="end" type="submit">
                <Search />
              </IconButton>
            </InputAdornment>,
        }}
      />
    </Box>
  )
}

export default SearchField