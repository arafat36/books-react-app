import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

export function SorterChips({ sorters }) {
  return (
    <Stack direction="column" spacing={1.5} mb={1}>
      <Typography variant="button">Sort by:</Typography>
      <Box display="flex" gap={1.5} flexWrap="wrap">
        {sorters.map(({ id, label, toggleHandler, selected, ascendingOrder }) => (
          <Chip
            clickable
            icon={selected
              ? ascendingOrder ? <ArrowDownward /> : <ArrowUpward />
              : null}
            color='primary'
            variant={selected ? "filled" : "outlined"}
            key={id}
            label={label}
            onClick={toggleHandler} />
        ))}
      </Box>
    </Stack>
  );
}
