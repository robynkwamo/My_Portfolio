import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';

export default function InviteInfo({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phoneNumber,
  setPhoneNumber,
  canHavePlusOne,
  inviteInfo,
  isInvited,
  guestNotFound,
  isAttending,
  setIsAttending,
  hasPlusOne,
  setHasPlusOne,
  updateAttendance,
}) {
  const handleAttendanceConfirmation = (e) => {
    setIsAttending(JSON.parse(e.target.value));
  };

  const handleHasPlusOne = (e) => {
    setHasPlusOne(JSON.parse(e.target.value));
  };

  useEffect(() => {
    if (phoneNumber?.length === 10 && firstName && lastName) {
      inviteInfo(phoneNumber, firstName, lastName);
    }
  }, [firstName, inviteInfo, lastName, phoneNumber]);

  return (
    <Paper
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        paddingY: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%' }}>
        <Grid item container justifyContent={'center'} xs={12}>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item container justifyContent={'center'} xs={12}>
          <TextField required id="outlined-required" label="Last Name" onChange={(e) => setLastName(e.target.value)} />
        </Grid>
        <Grid item container justifyContent={'center'} xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            type="number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Grid>
        {isInvited && firstName && (
          <Grid item container marginX={6} xs={12}>
            <Typography paddingLeft={2} letterSpacing={2} gutterBottom fontSize={18} fontWeight={500}>
              Hi {firstName.toUpperCase()}
            </Typography>
          </Grid>
        )}
        {isInvited && (
          <Grid item container marginX={6} xs={12}>
            <FormControl sx={{ paddingX: 2 }}>
              <FormLabel id="demo-radio-buttons-group-label">Are you able to attend? </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={isAttending}
                name="radio-buttons-group"
                onChange={handleAttendanceConfirmation}
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        )}
        {canHavePlusOne && (
          <Grid item container marginX={6} xs={12}>
            <FormControl sx={{ paddingX: 2 }}>
              <FormLabel id="demo-radio-buttons-group-label">Are you bringing a +1? </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={hasPlusOne}
                name="radio-buttons-group"
                onChange={handleHasPlusOne}
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        )}
        <Grid item container marginX={6} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={true} />}
              label="Receive text message notification about the event."
              onChange={() => console.log('Agreing to receive msg')}
            />
          </FormGroup>
        </Grid>
        {updateAttendance && (
          <Grid item container justifyContent={'center'} xs={12}>
            <Alert severity="info">You've already submitted the form. Would you like to update?</Alert>
          </Grid>
        )}
        {guestNotFound && (
          <Grid item container justifyContent={'center'} xs={12}>
            <Alert severity="error">Sorry we couldn't find a guest with this info. Please contact the host.</Alert>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
