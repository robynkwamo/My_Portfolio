import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Footer({ noRsvpBtn }) {
  return (
    <Grid
      container
      rowSpacing={2}
      height={'100%'}
      sx={{
        backgroundColor: '#1C1717',
      }}
    >
      <Grid
        item
        container
        xs={12}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          color={'#fff'}
          variant="h1"
          gutterBottom
          fontSize={22}
          letterSpacing={1}
          fontWeight={500}
          fontFamily={'Croissant One'}
        >
          #ShoweringTheNkwamos
        </Typography>
      </Grid>
      <Grid container item xs={12} alignItems={'center'} justifyContent={'center'}>
        <Grid item container xs={noRsvpBtn ? 12 : 6} justifyContent={'center'}>
          <a href={'https://www.babylist.com/list/roby-nkwamo'} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="secondary">
              The Registry
            </Button>
          </a>
        </Grid>
        {!noRsvpBtn && (
          <Grid item container xs={6} justifyContent={'center'}>
            <Link to={'/armelle&robyshower/rsvp'} style={{ color: '#000' }}>
              <Button variant="contained" sx={{ backgroundColor: '#60ABAA', color: 'black' }}>
                RSVP NOW
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          color={'#fff'}
          variant="h1"
          gutterBottom
          fontSize={16}
          letterSpacing={1}
          fontWeight={500}
          fontFamily={'Roboto'}
        >
          {'Copyright © '}
          LetServU Tech &nbsp;
          {new Date().getFullYear()}
          {'.'} &nbsp;
        </Typography>
        <Typography
          align={'center'}
          color={'#fff'}
          variant="h1"
          gutterBottom
          fontSize={16}
          letterSpacing={1}
          fontWeight={500}
          fontFamily={'Roboto'}
        >
          Powered By LetServU Tech
        </Typography>
      </Grid>
    </Grid>
  );
}
