import { Box, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';

export function YearBetweenPicker({ handleFromYearChange, handleToYearChange }) {
  return (
    <Stack direction="column" spacing={1.5} mb={1}>
      <Typography variant="button">Date range:</Typography>
      <Box display="flex" gap={2} alignItems="center">
        <YearPicker
          label="Year From"
          localeText={{ toolbarTitle: "Select start year:" }}
          onChange={handleFromYearChange} />
        <YearPicker
          label="Year To"
          localeText={{ toolbarTitle: "Select end year:" }}
          onChange={handleToYearChange} />
      </Box>
    </Stack>
  );
}

function YearPicker(props) {
  return (
    <DatePicker
      disableFuture
      views={["year"]}
      {...props}
    />
  )
}