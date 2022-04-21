import { Box, Button, Card, Grid, Paper, TextField } from '@mui/material';

import React from 'react';
import SimpleAccordion from '../../../components/dashboard/Accordion';

const CreateExam = () => {
  return (
    <Box sx={{ p: 10 }}>
      <Card sx={{ p: 5 }} component={Paper}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField fullWidth label='Test Name' />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField fullWidth label='Starts On' />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField fullWidth label='Expires In' />
          </Grid>
        </Grid>
        <Button size='large' variant='contained' sx={{ my: 5 }}>
          Add Question
        </Button>
        {/* Questions Accordion */}
        <SimpleAccordion />
      </Card>
    </Box>
  );
};

export default CreateExam;
