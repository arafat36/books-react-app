import { Box, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Box component="header" p={3}>
      <Typography variant="h3" textAlign="center">
        Your Favorite Book Library
      </Typography>
    </Box>
  )
}

export default Header