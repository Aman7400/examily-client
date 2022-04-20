import { Navigate, Outlet } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';

import Navbar from '../../components/dashboard/Navbar';
import axios from 'axios';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      if (token) {
        setIsLoading(true);
        console.log(import.meta.env.VITE_BACKEND_URL);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/auth/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log({ res });
        setIsLoggedIn(true);
        setUserProfile(res.data.user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return isLoading ? (
    <p>Loading...</p>
  ) : !isLoggedIn ? (
    <Navigate to='/landing' />
  ) : (
    <div>
      <Navbar user={userProfile} />
      <div>
        <p>{userProfile.firstName}</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
