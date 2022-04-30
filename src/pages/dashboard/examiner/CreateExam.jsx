import * as yup from 'yup';

import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  DesktopDatePicker,
  LoadingButton,
  LocalizationProvider,
} from '@mui/lab';
import React, { useState } from 'react';
import { add, empty } from '../../../redux/slices/questions';
import { compareAsc, format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Icon } from '@iconify/react';
import SimpleAccordion from '../../../components/dashboard/Accordion';
import axios from 'axios';
import { examiner } from '../../../utils/routes';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateExam = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [startsOn, setStartsOn] = useState(new Date());
  const [endsOn, setEndsOn] = useState(new Date());

  const questions = useSelector((state) => state.questions.value);

  // * Create Exam Schema

  const examSchema = yup
    .object({
      name: yup.string().required('Quiz Name is required'),
      description: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(examSchema),
  });

  // * Handle Create Exam ;
  const onSubmit = async ({ name, description }) => {
    console.log(startsOn, endsOn);
    try {
      if (questions.length < 1) {
        return enqueueSnackbar('Please Add Questions.', { variant: 'warning' });
      }

      // * Date Checking
      const result = compareAsc(startsOn, endsOn);
      if (result === 1) {
        // * if end date is before start date
        return enqueueSnackbar('End Date cannot be less than Start Date', {
          variant: 'error',
        });
      }

      const examObject = {
        name,
        description,
        questions,
        endsOn: format(endsOn, 'dd/MM/yyyy'),
        startsOn: format(startsOn, 'dd/MM/yyyy'),
      };

      const token = localStorage.getItem('token');

      const url = `${import.meta.env.VITE_BACKEND_URL}/exams/create`;

      const res = await axios.post(
        url,
        {
          examObject,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);

      enqueueSnackbar(res.data.message, { variant: 'success' });
      // * Remove Questions
      dispatch(empty());
      navigate(examiner.home);

      // if()
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error?.response?.data.message || error.message, {
        variant: 'error',
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ p: 10 }}>
        <Stack direction='row' sx={{ mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h3'>Create New Quiz</Typography>
            <Typography variant='body1'>*All Fields are Required</Typography>
          </Box>
          <Box>
            <LoadingButton
              onClick={handleSubmit(onSubmit)}
              loading={isSubmitting}
              variant='contained'
              size='large'
            >
              Create
            </LoadingButton>
          </Box>
        </Stack>
        <Card sx={{ p: 5 }} component={Paper}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                {...register('name')}
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
                fullWidth
                label='Name*'
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                fullWidth
                {...register('description')}
                error={Boolean(errors.description?.message)}
                helperText={errors.description?.message}
                label='Description'
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DesktopDatePicker
                label='Starts On*'
                inputFormat='dd/MM/yyyy'
                onChange={(newValue) => setStartsOn(newValue)}
                name='startsOn'
                value={startsOn}
                minDate={new Date()}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DesktopDatePicker
                label='Expires On*'
                inputFormat='dd/MM/yyyy'
                onChange={(newValue) => setEndsOn(newValue)}
                name='endsOn'
                value={endsOn}
                minDate={new Date()}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>
          {/* Add Question Form */}
          <FormDialog />
          {/* Questions Accordion */}
          <SimpleAccordion />
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateExam;

function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState('');
  const [titleError, setTitleError] = React.useState({
    hasError: false,
    error: '',
  });
  const [options, setOptions] = React.useState({
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
  });

  const [opt1Error, setOpt1Error] = React.useState({
    hasError: false,
    error: '',
  });
  const [opt2Error, setOpt2Error] = React.useState({
    hasError: false,
    error: '',
  });
  const [opt3Error, setOpt3Error] = React.useState({
    hasError: false,
    error: '',
  });
  const [opt4Error, setOpt4Error] = React.useState({
    hasError: false,
    error: '',
  });

  const [correctAnswer, setCorrectAnswer] = React.useState('1');
  const [correctAnswerError, setCorrectAnswerError] = React.useState({
    hasError: false,
    error: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    emptyFormState();
    setTitleError({ hasError: false, error: '' });
    resetOptionErrors();
    setCorrectAnswerError({ hasError: false, error: '' });
    setOpen(false);
  };

  const emptyFormState = () => {
    setTitle('');
    setOptions({
      opt1: '',
      opt2: '',
      opt3: '',
      opt4: '',
    });
    setCorrectAnswer('1');
  };

  const resetOptionErrors = () => {
    setOpt1Error({ hasError: false, error: '' });
    setOpt2Error({ hasError: false, error: '' });
    setOpt3Error({ hasError: false, error: '' });
    setOpt4Error({ hasError: false, error: '' });
  };

  const handleAddQuestion = () => {
    try {
      // * Reset Errors
      setTitleError({ hasError: false, error: '' });
      resetOptionErrors();
      setCorrectAnswerError({ hasError: false, error: '' });

      const { opt1, opt2, opt3, opt4 } = options;

      // * Validate Title
      if (!title) {
        return setTitleError({ hasError: true, error: 'Invalid Title' });
      }
      if (title === '') {
        return setTitleError({ hasError: true, error: 'Title is required' });
      }
      if (title.length < 10) {
        return setTitleError({
          hasError: true,
          error: 'Title must be min 10 Characters long',
        });
      }

      // * Validate Options
      if (!opt1) {
        return setOpt1Error({ hasError: true, error: 'Invalid Option' });
      }
      if (opt1.length < 1) {
        return setOpt1Error({
          hasError: true,
          error: 'Option must be at least 1 character long',
        });
      }
      if (opt1 === ' ') {
        return setOpt1Error({
          hasError: true,
          error: 'Empty Option are not allowed',
        });
      }

      if (!opt2) {
        return setOpt2Error({ hasError: true, error: 'Invalid Option' });
      }
      if (opt2.length < 1) {
        return setOpt2Error({
          hasError: true,
          error: 'Option must be at least 1 character long',
        });
      }
      if (opt2 === ' ') {
        return setOpt2Error({
          hasError: true,
          error: 'Empty Option are not allowed',
        });
      }

      if (!opt3) {
        return setOpt3Error({ hasError: true, error: 'Invalid Option' });
      }
      if (opt3.length < 1) {
        return setOpt3Error({
          hasError: true,
          error: 'Option must be at least 1 character long',
        });
      }
      if (opt3 === ' ') {
        return setOpt3Error({
          hasError: true,
          error: 'Empty Option are not allowed',
        });
      }

      if (!opt4) {
        return setOpt4Error({ hasError: true, error: 'Invalid Option' });
      }
      if (opt4.length < 1) {
        return setOpt4Error({
          hasError: true,
          error: 'Option must be at least 1 character long',
        });
      }
      if (opt4 === ' ') {
        return setOpt4Error({
          hasError: true,
          error: 'Empty Option are not allowed',
        });
      }

      // * Validate Correct Answer
      if (!correctAnswer) {
        return setCorrectAnswerError({
          hasError: true,
          error: 'Please select a correct answer',
        });
      }
      if (Number(correctAnswer) > 5) {
        return setCorrectAnswerError({
          hasError: true,
          error: 'Invalid Correct Answer',
        });
      }

      const question = {
        title,
        options: [opt1, opt2, opt3, opt4],
        correctAnswer,
      };
      dispatch(
        add({
          question,
        })
      );
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddOptions = (e) => {
    const { name, value } = e.target;
    console.log(name);

    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Button
        size='large'
        sx={{ my: 5 }}
        onClick={handleClickOpen}
        variant='contained'
      >
        Add Question
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ p: 5 }}>
          <DialogTitle>Add Question Details</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='Title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              helperText={titleError.hasError && titleError.error}
              error={titleError.hasError}
              fullWidth
              variant='outlined'
            />
            <TextField
              margin='dense'
              label='Option 1'
              name='opt1'
              value={options.opt1}
              onChange={handleAddOptions}
              error={opt1Error.hasError}
              helperText={opt1Error.hasError && opt1Error.error}
              fullWidth
              variant='outlined'
            />
            <TextField
              margin='dense'
              label='Option 2'
              name='opt2'
              value={options.opt2}
              onChange={handleAddOptions}
              error={opt2Error.hasError}
              helperText={opt2Error.hasError && opt2Error.error}
              fullWidth
              variant='outlined'
            />
            <TextField
              margin='dense'
              label='Option 3'
              name='opt3'
              value={options.opt3}
              onChange={handleAddOptions}
              error={opt3Error.hasError}
              helperText={opt3Error.hasError && opt3Error.error}
              fullWidth
              variant='outlined'
            />
            <TextField
              margin='dense'
              label='Option 4'
              name='opt4'
              value={options.opt4}
              onChange={handleAddOptions}
              error={opt4Error.hasError}
              helperText={opt4Error.hasError && opt4Error.error}
              fullWidth
              variant='outlined'
            />
            {/* Correct Answer */}
            <CorrectAnswerRadioButtons
              correctAnswerError={correctAnswerError}
              setCorrectAnswer={setCorrectAnswer}
              correctAnswer={correctAnswer}
            />
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' size='large' onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant='contained'
              size='large'
              onClick={handleAddQuestion}
            >
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

function CorrectAnswerRadioButtons({
  correctAnswerError,
  setCorrectAnswer,
  correctAnswer,
}) {
  return (
    <FormControl error={correctAnswerError.hasError} sx={{ my: 2 }}>
      <FormLabel id='correct-answer-radio-buttons-group-label'>
        Correct Answer
      </FormLabel>
      {correctAnswerError.hasError && (
        <Typography variant='body2' color='red'>
          {correctAnswerError.error}
        </Typography>
      )}
      <RadioGroup
        row
        aria-labelledby='correct-answer-radio-buttons-group-label'
        name='correct-answer-radio-buttons-group'
        value={correctAnswer}
        onChange={(e) => {
          setCorrectAnswer(e.target.value);
        }}
      >
        <FormControlLabel value='1' control={<Radio />} label='1' />
        <FormControlLabel value='2' control={<Radio />} label='2' />
        <FormControlLabel value='3' control={<Radio />} label='3' />
        <FormControlLabel value='4' control={<Radio />} label='4' />
      </RadioGroup>
    </FormControl>
  );
}
