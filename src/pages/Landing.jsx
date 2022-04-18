import { Box, Button, Link, Stack, Typography, styled } from '@mui/material';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const PageContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(6),
  height: '100vh',
}));

const Landing = () => {
  return (
    <PageContainer>
      {/* Heading */}
      <Stack direction='row' sx={{ alignItems: 'center' }}>
        {/* Logo - Brand */}
        <Typography
          variant='h4'
          component={RouterLink}
          to='/landing'
          sx={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#000',
            '>span': {
              color: 'secondary.main',
            },
            flexGrow: 1,
          }}
        >
          Exam<span>ily</span>
        </Typography>
        {/* Menu */}
        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
          <Button variant='text' size='large' color='inherit'>
            Buy
          </Button>
          <Button
            variant='text'
            component={RouterLink}
            to='/login'
            size='large'
            color='inherit'
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to='/register'
            variant='contained'
            size='large'
            color='secondary'
          >
            Join Now
          </Button>
        </Stack>
      </Stack>
      {/* Body */}
    </PageContainer>
  );
};

export default Landing;
