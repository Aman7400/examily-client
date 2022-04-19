import * as yup from 'yup';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup
  .object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const StyledForm = styled('form')(({ theme }) => ({
  width: '560px',
  boxShadow: '0 0 10px 4px #f0f0f0',
  borderRadius: '10px',
  padding: theme.spacing(6),
}));

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      console.log(import.meta.env.VITE_BACKEND_URL);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        data
      );
      console.log(res);
      localStorage.setItem('token', res.data.token);
      enqueueSnackbar(res.data.message, { variant: 'success' });
      reset({ email: '', password: '' });
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
      enqueueSnackbar(error.response.data.message, { variant: 'error' });
    }
  };

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
          {...register('email')}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
        />
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <TextField
          color='secondary'
          label='Password'
          type='password'
          fullWidth
          {...register('password')}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
        />
      </FormControl>
      <Stack sx={{ mt: 2 }}>
        <LoadingButton
          onClick={handleSubmit(onSubmit)}
          loading={isSubmitting}
          color='secondary'
          size='large'
          variant='contained'
        >
          Login
        </LoadingButton>
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
