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

const RegisterForm = () => {
  return (
    <StyledForm>
      <Button
        size='small'
        startIcon={<Icon icon='oi:home' />}
        component={Link}
        to='/landing'
        sx={{ mb: 1 }}
      >
        Home
      </Button>
      <Typography variant='h4' color='primary' sx={{ mb: 5 }}>
        Create An Account !!
      </Typography>
      <Stack direction='row' spacing={2} margin='normal'>
        <TextField focused label='First Name' fullWidth />
        <TextField label='Last Name' fullWidth />
      </Stack>
      <FormControl fullWidth margin='normal'>
        <TextField label='Email' type='email' fullWidth />
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <TextField label='Password' type='password' fullWidth />
      </FormControl>
      <Stack sx={{ mt: 2 }}>
        <Button size='large' variant='contained'>
          Register Now
        </Button>
      </Stack>

      <Stack
        direction='row'
        sx={{ mt: 5, alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography>Have an Account?</Typography>
        <Button size='large' to='/login' component={Link} variant='text'>
          Login
        </Button>
      </Stack>
    </StyledForm>
  );
};

export default RegisterForm;
