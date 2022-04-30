import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewExam = () => {
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
          <Typography variant='h3'>Exam Details {examDetails?.name}</Typography>
          <Typography variant='body1'>
            *All exams are urs are Required
          </Typography>
        </Box>
      </Stack>
      {/* Metrics */}
      <Grid container spacing={5} sx={{ width: '100%' }}>
        {/* Total Exams */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h6'>Total Questions</Typography>
            <Typography variant='h2'>{examDetails.questions.length}</Typography>
          </Card>
        </Grid>
        {/* Total Something */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h6'>Total Students attempted</Typography>
            <Typography variant='h2'>
              {examDetails.attemptedBy.length}
            </Typography>
          </Card>
        </Grid>
        {/* Total Something */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography variant='h6'>Total Average Score</Typography>
            <Typography variant='h2'>{examDetails?.avgScore || 0}</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewExam;
