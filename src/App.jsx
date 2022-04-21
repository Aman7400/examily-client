import { Navigate, Route, Routes } from 'react-router-dom';
import { examiner, general, student } from './utils/routes';

import { Button } from '@mui/material';
import CreateExam from './pages/dashboard/examiner/CreateExam';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/dashboard/examiner/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import NotFound from './pages/dashboard/NotFound';
import React from 'react';
import Register from './pages/Register';
import UnAuthorised from './pages/dashboard/UnAuthorised';

// TODO - Add Responsive CSS
// TODO - Create distant Student n Examiner Route

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          {/* General Route - Profile */}
          <Route path={general.profile} element={<p>Ur Profile</p>} />

          {/* Student Route */}
          <Route path={student.home} element={<p>Student Home</p>} />
          <Route path={student.allTests} element={<p>Student All Tests</p>} />
          <Route path={student.takeTest} element={<p>Student Take Test</p>} />

          {/* Examiner Route */}
          <Route path={examiner.home} element={<Home />} />
          <Route path={examiner.createTest} element={<CreateExam />} />
          {/* Unauthorized */}
          <Route path='/unauthorised' element={<UnAuthorised />} />
          {/* FallBacks */}
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
