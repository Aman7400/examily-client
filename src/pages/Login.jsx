import { Box, Stack, Typography, styled } from '@mui/material';

import LoginForm from '../components/auth/LoginForm';
import React from 'react';

const PageContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100vh',
}));

const IllustrationContainer = styled('div')(({ theme }) => ({
  backgroundImage: `url("/assets/login.png")`,
  width: '50%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#fff',
  display: 'grid',
  placeContent: 'center',
  padding: theme.spacing(10),
  fontWeight: 'bold',
}));
const FormContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  placeContent: 'center',
  width: '50%',
}));

const Login = () => {
  return (
    <PageContainer direction='row'>
      {/* Illustration */}
      <IllustrationContainer>
        <Box>
          <Typography
            className='heading-text-shadow'
            variant='h1'
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            {' '}
            Welcome Back
          </Typography>
          <Typography className='heading-text-shadow' variant='h3'>
            Evaluating students was never this easy and fun. Create Quizes and
            Tests superfast and easy.
          </Typography>
        </Box>
      </IllustrationContainer>
      {/* Form */}
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </PageContainer>
  );
};

export default Login;
