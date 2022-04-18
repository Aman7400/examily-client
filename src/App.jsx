import { Route, Routes } from 'react-router-dom';

import { Button } from '@mui/material';
import Landing from './pages/Landing';
import React from 'react';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<p>Wekcome to Examily</p>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<p>Login</p>} />
        <Route path='/register' element={<p>Register</p>} />
      </Routes>
    </div>
  );
};

export default App;
