import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledForm = styled('form')(({ theme }) => ({
  width: '560px',
  boxShadow: '0 0 10px 4px #f0f0f0',
  borderRadius: '10px',
  padding: theme.spacing(6),
}));

const LoginForm = () => {
  return (
    <StyledForm>
      <Button
        size='small'
        startIcon={<Icon icon='oi:home' />}
        color='secondary'
        component={Link}
        to='/landing'
        sx={{ mb: 1 }}
      >
        Home
      </Button>
      <Typography variant='h4' color='secondary' sx={{ mb: 5 }}>
        Login to your account
      </Typography>

      <FormControl fullWidth margin='normal'>
        <TextField
          focused
          color='secondary'
          label='Email'
          type='email'
          fullWidth
        />
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <TextField
          color='secondary'
          label='Password'
          type='password'
          fullWidth
        />
      </FormControl>
      <Stack sx={{ mt: 2 }}>
        <Button color='secondary' size='large' variant='contained'>
          Login
        </Button>
      </Stack>

      <Stack
        direction='row'
        sx={{ mt: 5, alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography color='secondary'>Create an Account?</Typography>
        <Button
          color='secondary'
          size='large'
          to='/register'
          component={Link}
          variant='text'
          sx={{ textTransform: 'capitalize' }}
        >
          Register
        </Button>
      </Stack>
    </StyledForm>
  );
};

export default LoginForm;
