import { Box, Button, Link, Stack, Typography, styled } from '@mui/material';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const PageContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(10),
  height: '100vh',
}));

const HeroImageContainer = styled('section')({
  flex: 1,
  display: 'grid',
  placeContent: 'end',
  '>img': {
    maxWidth: '100%',
    height: 'auto',
  },
});
const HeroTextContainer = styled('section')({
  flex: 1,

  marginTop: '5rem',
});

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
      <Stack direction='row' sx={{ my: 10 }}>
        {/* Hero Text */}
        <HeroTextContainer>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              '>span': {
                color: 'secondary.main',
              },
            }}
          >
            Want to create a <br /> model <span>test</span> or <span>quiz</span>{' '}
            ?
          </Typography>
          <Typography variant='h4' sx={{ color: '#c1bebe', my: 2 }}>
            Create tests on our platform for free. <br />
            Sell your MCQs tests and track results
          </Typography>
          {/* CTA's */}
          <Stack direction='row' spacing={2}>
            <Button variant='contained' color='secondary' size='large'>
              Create A Test
            </Button>
            <Button variant='outlined' color='secondary' size='large'>
              Take A Test
            </Button>
          </Stack>
        </HeroTextContainer>

        {/* Hero Image */}
        <HeroImageContainer>
          <img src='/assets/landing-hero.png' alt='Hero' />
        </HeroImageContainer>
      </Stack>
    </PageContainer>
  );
};

export default Landing;
