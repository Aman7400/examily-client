import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TakeExam = () => {
  const { examId } = useParams();

  const [examDetails, setExamDetails] = useState();
  const [loading, setLoading] = useState(true);

  async function getAllExamDetails() {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const url = `${import.meta.env.VITE_BACKEND_URL}/exams/${examId}`;

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setExamDetails(res.data.details);
      setLoading(false);

      console.log(res.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllExamDetails();
    return () => {};
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Box sx={{ p: 10 }}>
      {/* Heading */}
      <Stack direction='row' sx={{ mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h3'>
            Exam Details - {examDetails?.name}
          </Typography>
          <Typography variant='body1'>{examDetails.description}</Typography>
        </Box>
        <Box>
          <LoadingButton
            //   onClick={handleSubmit(onSubmit)}
            //   loading={isSubmitting}
            variant='contained'
            size='large'
          >
            Submit Quiz
          </LoadingButton>
        </Box>
      </Stack>
      {/* Metrics */}
      <Grid container sx={{ width: '100%' }}>
        {/* Total Questions */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant='h6'>
            Total Questions - {examDetails.questions.length}
          </Typography>
        </Grid>
        {/* Total Students */}
        <Grid item xs={12} md={6} lg={9}>
          <Card>
            {examDetails.questions.map((q, i) => (
              <Box key={i} sx={{ p: 5 }}>
                <Typography variant='h6'>
                  {' '}
                  {i + 1}) {q.title}
                </Typography>
                <FormControl>
                  <FormLabel id='demo-radio-buttons-group-label'>
                    Select a option
                  </FormLabel>
                  <RadioGroup name='options-group'>
                    {q.options.map((opt, _i) => (
                      <FormControlLabel
                        key={_i}
                        value={_i + 1}
                        control={<Radio />}
                        label={opt}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TakeExam;
