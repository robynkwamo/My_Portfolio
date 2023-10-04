import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import InviteInfo from './reservationSteps/InviteInfo';
import { getInviteInfo, guestUpdate } from '../../APIs/reservationApis';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const steps = ['RSVP', 'Confirmation'];

export default function ReservationInfo() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [isAttending, setIsAttending] = useState();
  const [canHavePlusOne, setCanHavePlusOne] = useState(false);
  const [hasPlusOne, setHasPlusOne] = useState();
  const [isInvited, setIsInvited] = useState(false);
  const [guestNotFound, setGuestNotFound] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [updateAttendance, setUpdateAttendance] = useState(false);

  const onConfirmingAttendance = async () => {
    await guestUpdate(phoneNumber, isAttending, hasPlusOne).then((res) => {
      if (res) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSubmissionError(false);
      } else {
        setSubmissionError(true);
      }
    });
  };

  const inviteInfo = async (phoneNumber, firstName, lastName) => {
    await getInviteInfo(phoneNumber, firstName, lastName).then((res) => {
      if (res) {
        const { firstName, isDeleted, eventId, isAttending } = res;
        if (!isDeleted && eventId && firstName) {
          setCanHavePlusOne(res.canHavePlusOne);
          setGuestNotFound(false);
          setIsInvited(true);
          // setIsAttending(isAttending);
          if (isAttending) {
            setUpdateAttendance(true);
          } else {
            setUpdateAttendance(false);
          }
        }
      } else {
        setIsInvited(false);
        setGuestNotFound(true);
      }
    });
  };

  const backBtn = () => {
    return (
      <Link to={'/armelle&robyshower'} style={{ color: '#000' }}>
        <Button variant="text">Back</Button>
      </Link>
    );
  };

  return (
    <Grid container rowSpacing={1} height={'100vh'} backgroundColor={'#fff'} whiteSpace={0}>
      <Grid item xs={12} maxHeight={100}>
        <Header />
      </Grid>
      <Grid item xs={12} backgroundColor={'#fff'}>
        <Grid item xs={12} maxHeight={100}>
          <Paper elevation={1} sx={{ paddingY: 2 }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Paper>
        </Grid>
        {activeStep === steps.length - 1 ? (
          <React.Fragment>
            <Typography
              align={'center'}
              color={'#E8825A'}
              variant="h1"
              gutterBottom
              fontSize={26}
              letterSpacing={1}
              fontWeight={300}
              fontFamily={'Croissant One'}
            >
              Thank Your for responding. The host has received your response and you'll receive more details soon.
            </Typography>
            {backBtn()}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep + 1 === 1 && (
              <InviteInfo
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                isAttending={isAttending}
                setIsAttending={setIsAttending}
                canHavePlusOne={canHavePlusOne}
                hasPlusOne={hasPlusOne}
                setHasPlusOne={setHasPlusOne}
                inviteInfo={inviteInfo}
                isInvited={isInvited}
                guestNotFound={guestNotFound}
                updateAttendance={updateAttendance}
              />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {backBtn()}
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                onClick={onConfirmingAttendance}
                disabled={!isInvited || !firstName || !lastName || (isAttending !== true && isAttending !== false)}
                variant="contained"
              >
                Confirm
              </Button>
            </Box>
          </React.Fragment>
        )}

        {submissionError && (
          <Grid item container justifyContent={'center'} xs={12}>
            <Alert severity="error">
              Sorry There was an error submitting your response. Please try again or contact host.
            </Alert>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Footer noRsvpBtn={true} />
      </Grid>
    </Grid>
  );
}
