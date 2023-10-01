import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Header from './Header';
import FlyerArea from './FlyerArea';
import Footer from './Footer';

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: '#F6F6F6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ReservationModule() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      height={'100vh'}
      sx={{
        backgroundSize: { md: 'cover' },
        backgroundColor: '#F6F6F6',
      }}
    >
      <Grid item xs={12} height={'10%'}>
        <Header />
      </Grid>
      <Grid item xs={12} minHeight={400}>
        <Item>
          <Typography
            align={'center'}
            color={'#E8825A'}
            variant="h1"
            gutterBottom
            fontSize={32}
            letterSpacing={1}
            fontWeight={300}
            fontFamily={'Croissant One'}
          >
            It's A Suprise!
          </Typography>
        </Item>
        <Item>
          <FlyerArea />
        </Item>
      </Grid>
      <Grid item xs={12} minHeight={'42vh'}>
        <Footer />
      </Grid>
    </Grid>
  );
}
