import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { examiner, general, student } from '../../utils/routes';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const { userType } = user;

  const fLetter = user?.firstName.substring(0, 1);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            Examily
          </Typography>
          <Button
            component={Link}
            variant='contained'
            color='secondary'
            sx={{ mr: 1 }}
            to={userType === 'Examiner' ? examiner.home : student.home}
          >
            Home
          </Button>
          <Button
            component={Link}
            to={
              userType === 'Examiner' ? examiner.createTest : student.allTests
            }
            variant='contained'
            color='secondary'
            sx={{ mr: 1 }}
          >
            {userType === 'Examiner' ? 'Create Test' : 'Take Test'}
          </Button>

          <IconButton onClick={handleClick}>
            <Avatar>{fLetter}</Avatar>
          </IconButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              component={Link}
              to={general.profile}
              onClick={handleClose}
            >
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
