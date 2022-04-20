import { Navigate, Route, Routes } from 'react-router-dom';

import { Button } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import React from 'react';
import Register from './pages/Register';

// TODO - Add Responsive CSS
// TODO - Create distant Student n Examiner Route

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<p>Home for User</p>} />
          <Route path='/tests/all' element={<p>All tests for User</p>} />
          <Route path='/tests/:id' element={<p>A Test with User</p>} />
          <Route path='/test/new' element={<p>Create A Test for User</p>} />
          <Route path='/profile' element={<p>Ur Profile</p>} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
