import { Card, Grid, Typography } from '@mui/material';

import BasicTable from '../../../components/dashboard/Table';
import { Box } from '@mui/system';
import React from 'react';

const Home = () => {
  return (
    <Box sx={{ p: 10 }}>
      {/* Metrics */}
      <Grid container sx={{ width: '100%' }} spacing={5}>
        {/* Total Exams */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              architecto itaque placeat doloremque quaerat. Blanditiis quis
              magnam aut cum placeat ab id totam modi! Eligendi omnis blanditiis
              corporis voluptatem sit?
            </Typography>
          </Card>
        </Grid>
        {/* Total Something */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              architecto itaque placeat doloremque quaerat. Blanditiis quis
              magnam aut cum placeat ab id totam modi! Eligendi omnis blanditiis
              corporis voluptatem sit?
            </Typography>
          </Card>
        </Grid>
        {/* Total Something */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 5 }}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              architecto itaque placeat doloremque quaerat. Blanditiis quis
              magnam aut cum placeat ab id totam modi! Eligendi omnis blanditiis
              corporis voluptatem sit?
            </Typography>
          </Card>
        </Grid>

        {/* TABLE */}
        <Grid item xs={12}>
          <BasicTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
