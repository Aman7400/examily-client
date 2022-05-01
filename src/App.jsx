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
import StudentAllTests from './pages/dashboard/student/StudentAllTests';
import StudentHome from './pages/dashboard/student/StudentHome';
import TakeExam from './pages/dashboard/student/TakeExam';
import UnAuthorised from './pages/dashboard/UnAuthorised';
import ViewExam from './pages/dashboard/examiner/ViewExam';

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
          <Route path={student.home} element={<StudentHome />} />
          <Route path={student.allTests} element={<StudentAllTests />} />
          <Route path={student.takeTest} element={<TakeExam />} />

          {/* Examiner Route */}
          <Route path={examiner.home} element={<Home />} />
          <Route path={examiner.createTest} element={<CreateExam />} />
          <Route path={examiner.viewTest} element={<ViewExam />} />
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
