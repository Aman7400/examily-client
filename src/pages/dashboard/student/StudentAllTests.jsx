import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import AllAvailableExamTable from '../../../components/dashboard/AllAvailableExamTable';
import axios from 'axios';
import { greetings } from '../../../utils/helpers';
import { useOutletContext } from 'react-router-dom';

const StudentAllTests = () => {
  const [availableExams, setAvailableExams] = useState([]);
  const { user } = useOutletContext();

  async function getAllAvailableExams() {
    try {
      const token = localStorage.getItem('token');
      const url = `${import.meta.env.VITE_BACKEND_URL}/exams/available`;

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAvailableExams(res.data.exams);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAvailableExams();
    return () => {};
  }, []);

  return (
    <Box sx={{ p: 10 }}>
      <Stack direction='row' sx={{ mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h3'>Available Exams</Typography>
          <Typography variant='body1'></Typography>
        </Box>
        <Box>
          {/* <LoadingButton
              onClick={handleSubmit(onSubmit)}
              loading={isSubmitting}
              variant='contained'
              size='large'
            >
              Create
            </LoadingButton> */}
        </Box>
      </Stack>
      <AllAvailableExamTable allExams={availableExams} />
    </Box>
  );
};

export default StudentAllTests;
