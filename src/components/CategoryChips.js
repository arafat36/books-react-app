import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

export function CategoryChips({ categories }) {
  return (
    <Stack direction="column" spacing={1.5} mb={1}>
      <Typography variant="button">Categories:</Typography>
      <Box display="flex" gap={1.5} flexWrap="wrap">
        {categories.map(({ id, label, active, toggleHandler }) => (
          <Chip
            clickable
            variant={active ? "filled" : "outlined"}
            color='primary'
            key={id}
            onClick={toggleHandler}
            label={label} />))}
      </Box>
    </Stack>
  );
}
