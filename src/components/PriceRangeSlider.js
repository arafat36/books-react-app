import { Box, Stack, Typography, Slider } from '@mui/material';
import React from 'react';
import { PRICE_RANGE } from '../constants';

export function PriceRangeSlider({ handleRangeChange }) {
  return (
    <Stack direction="column" spacing={1.5} mb={1}>
      <Typography variant="button">Price range:</Typography>
      <Box display="flex" gap={2} alignItems="center">
        ${PRICE_RANGE.MIN}
        <Slider
          defaultValue={[PRICE_RANGE.MIN, PRICE_RANGE.MAX]}
          // value={range}
          onChangeCommitted={handleRangeChange}
          min={PRICE_RANGE.MIN}
          max={PRICE_RANGE.MAX}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => "$" + value} />
        ${PRICE_RANGE.MAX}
      </Box>
    </Stack>
  );
}
