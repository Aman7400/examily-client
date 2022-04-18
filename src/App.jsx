import { Navigate, Route, Routes } from 'react-router-dom';

import { Button } from '@mui/material';
import Landing from './pages/Landing';
import Login from './pages/Login';
import React from 'react';
import Register from './pages/Register';

// TODO - Add Responsive CSS

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Navigate to='/landing' />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
