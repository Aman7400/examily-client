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
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { add, remove } from '../../../redux/slices/questions';
import { useDispatch, useSelector } from 'react-redux';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Icon } from '@iconify/react';
import React from 'react';
import SimpleAccordion from '../../../components/dashboard/Accordion';

const CreateExam = () => {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
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
            <Button variant='contained' size='large'>
              Create
            </Button>
          </Box>
        </Stack>
        <Card sx={{ p: 5 }} component={Paper}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={4}>
              <TextField fullWidth label='Name*' />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField fullWidth label='Description' />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DesktopDatePicker
                label='Starts On*'
                inputFormat='dd/MM/yyyy'
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DesktopDatePicker
                label='Expires On*'
                inputFormat='dd/MM/yyyy'
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>
          {/* Question Form */}
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddQuestion = () => {
    const question = {
      title: "India's Capital City is",
      options: ['Chennai', 'Jaipur', 'Lucknow', 'Delhi'],
      correctAnswer: 4,
    };
    dispatch(
      add({
        question,
      })
    );
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
              id='name'
              label='Title'
              type='email'
              fullWidth
              variant='outlined'
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Option 1'
              type='email'
              fullWidth
              variant='outlined'
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Option 2'
              type='email'
              fullWidth
              variant='outlined'
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Option 3'
              type='email'
              fullWidth
              variant='outlined'
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Option 4'
              type='email'
              fullWidth
              variant='outlined'
            />
            <RowRadioButtonsGroup />
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

function RowRadioButtonsGroup() {
  return (
    <FormControl sx={{ my: 2 }}>
      <FormLabel id='demo-row-radio-buttons-group-label'>
        Correct Answer
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
      >
        <FormControlLabel value='female' control={<Radio />} label='1' />
        <FormControlLabel value='male' control={<Radio />} label='2' />
        <FormControlLabel value='other' control={<Radio />} label='3' />
        <FormControlLabel value='' control={<Radio />} label='4' />
      </RadioGroup>
    </FormControl>
  );
}
