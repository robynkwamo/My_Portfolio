import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        backgroundColor: '#0C2D48',
      }}
    >
      <Grid item xs={12}>
        <Typography
          align={'center'}
          color={'#fff'}
          variant="h1"
          gutterBottom
          fontSize={42}
          letterSpacing={2.5}
          fontWeight={500}
          fontFamily={'Roboto'}
        >
          THE NKWAMO'S
        </Typography>
      </Grid>
    </Grid>
  );
}
