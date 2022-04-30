import { Card, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import BasicTable from '../../../components/dashboard/Table';
import { Box } from '@mui/system';
import axios from 'axios';
import { greetings } from '../../../utils/helpers';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { user } = useOutletContext();
  const [allExams, setAllExams] = useState([]);

  async function getAllExamsDetails() {
    try {
      const token = localStorage.getItem('token');
      const url = `${import.meta.env.VITE_BACKEND_URL}/exams/all`;

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAllExams(res.data.exams);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllExamsDetails();
    return () => {};
  }, []);

  return (
    <Box sx={{ p: 10 }}>
      <Stack direction='row' sx={{ mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h3'>{greetings(user.firstName)}</Typography>
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
      <BasicTable allExams={allExams} />
    </Box>
  );
};

export default Home;
