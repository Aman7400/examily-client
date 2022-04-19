import * as yup from 'yup';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('First Name is Required')
      .matches(/^[A-Za-z0-9 ]+$/, 'No special characters allowed'),
    lastName: yup
      .string()
      .matches(/^[A-Za-z0-9 ]+$/, 'No special characters allowed'),
    userType: yup.string().required('User Type is Required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  .required();

const StyledForm = styled('form')(({ theme }) => ({
  width: '560px',
  boxShadow: '0 0 10px 4px #f0f0f0',
  borderRadius: '10px',
  padding: theme.spacing(6),
}));

const RegisterForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        data
      );
      console.log(res);
      enqueueSnackbar(res.data.message, { variant: 'success' });
      navigate('/login');
      reset({ email: '', password: '', firstName: '', lastName: '' });
    } catch (error) {
      console.log(error.response.data.message);
      enqueueSnackbar(error.response.data.message, { variant: 'error' });
    }
  };

  const handleUserTypeChange = (e) => {
    setValue('userType', e.target.value);
  };

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
        <TextField
          focused
          {...register('firstName')}
          label='First Name'
          size='large'
          name='firstName'
          type='text'
          fullWidth
          error={Boolean(errors.firstName?.message)}
          helperText={errors.firstName?.message}
        />
        <TextField
          {...register('lastName')}
          label='Last Name'
          size='large'
          name='lastName'
          type='text'
          fullWidth
          error={Boolean(errors.lastName?.message)}
          helperText={errors.lastName?.message}
        />
      </Stack>
      <FormControl fullWidth margin='normal'>
        <TextField
          {...register('email')}
          label='Email'
          size='large'
          name='email'
          type='email'
          fullWidth
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
        />
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <InputLabel id='usertype-label'>User Type</InputLabel>
        <Select
          labelId='usertype-label'
          label='User Type'
          defaultValue={'Examiner'}
          size='large'
          name='userType'
          {...register('userType')}
          onChange={handleUserTypeChange}
        >
          <MenuItem value={'Examiner'}>Examiner</MenuItem>
          <MenuItem value={'Student'}>Student</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin='normal'>
        <TextField
          {...register('password')}
          label='Password'
          size='large'
          name='password'
          type='password'
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          fullWidth
        />
      </FormControl>
      <Stack sx={{ mt: 2 }}>
        <Button
          onClick={handleSubmit(onSubmit)}
          size='large'
          variant='contained'
        >
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
