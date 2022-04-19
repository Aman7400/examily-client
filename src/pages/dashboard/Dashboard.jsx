import { Navigate } from 'react-router-dom';
import React from 'react';

const Dashboard = () => {
  console.log('Dashboard');
  const isAuthencticated = false;
  if (!isAuthencticated) {
    return <Navigate to='/landing' />;
  }
  return <div>dashboard</div>;
};

export default Dashboard;
