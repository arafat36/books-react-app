import { Close } from '@mui/icons-material';
import { AppBar, Button, Box, Dialog, DialogContent, Divider, IconButton, Slide, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { SorterChips } from './SorterChips';
import { CategoryChips } from './CategoryChips';
import { PriceRangeSlider } from './PriceRangeSlider';
import { YearBetweenPicker } from './YearBetweenPicker';



function FiltersDialog({ sorters, categories, priceBetween, yearBetween }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box py={3}>
        <Button fullWidth variant="outlined" onClick={handleClickOpen}>
          Filters
        </Button>
      </Box>

      <DialogContainer {...{ handleClose, open }}>
        <DialogBar {...{ handleClose }} />
        <DialogContent>
          <Stack direction="column" spacing={1.5} divider={<Divider light />}>
            <SorterChips {...{ sorters }} />
            <CategoryChips {...{ categories }} />
            <PriceRangeSlider {...priceBetween} />
            <YearBetweenPicker {...yearBetween} />
            <Stack spacing={2} py={2}>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="outlined">
                Reset (not implemented)
              </Button> */}
            </Stack>
          </Stack>
        </DialogContent>
      </DialogContainer>
    </>
  );
}

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function DialogContainer({ children, handleClose, open }) {
  const isMobile = useMediaQuery("@media screen and (max-width: 600px)");
  return (
    <Dialog
      fullScreen={isMobile}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      scroll="paper"
    >
      {children}
    </Dialog>
  )
}

function DialogBar({ handleClose }) {
  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleClose}>
          <Close />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          Filters
        </Typography>
        {/* <Button color="inherit" onClick={handleClose}>
          save
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}



export default FiltersDialog