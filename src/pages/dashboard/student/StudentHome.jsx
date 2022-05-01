import { Box, Card, Grid, Stack, Typography } from '@mui/material';

import React from 'react';
import { greetings } from '../../../utils/helpers';
import { useOutletContext } from 'react-router-dom';

const StudentHome = () => {
  const { user } = useOutletContext();
  const { results } = user;
  console.log(user);

  return (
    <Box sx={{ p: 10 }}>
      {/* Heading */}
      <Stack direction='row' sx={{ mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h3'>{greetings(user.firstName)}</Typography>
          <Typography variant='body1'></Typography>
        </Box>
      </Stack>
      {/* Metrics */}
      <Grid container spacing={5} sx={{ width: '100%' }}>
        {/* Total Questions */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h6'>Total Exams taken</Typography>
            <Typography variant='h2'>{results.length}</Typography>
          </Card>
        </Grid>
        {/* Total Students */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h6'>Highest Score</Typography>
            <Typography variant='h2'>
              {/* {examDetails.attemptedBy.length} */}
            </Typography>
          </Card>
        </Grid>
        {/* Total Avg Score */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h6'>Pass / fail</Typography>
            {/* <Typography variant='h2'>{examDetails?.avgScore || 0}</Typography> */}
          </Card>
        </Grid>
        {/* Score Board */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h2'>Scorecard goes here</Typography>
          </Card>
        </Grid>
      </Grid>
      {/* Cards */}
    </Box>
  );
};

export default StudentHome;
