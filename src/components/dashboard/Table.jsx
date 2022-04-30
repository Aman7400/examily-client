import * as React from 'react';

import { Button, IconButton, Menu, MenuItem } from '@mui/material';

import { Icon } from '@iconify/react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getStatusStyles } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({ allExams }) {
  const navigate = useNavigate();

  function handleViewDetails(examId) {
    navigate(`/examiner/exams-details/${examId}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Sno</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Description</TableCell>
            <TableCell align='right'>Total Questions</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Attempted By</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allExams.length > 0 &&
            allExams?.map((exam, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {i + 1}
                </TableCell>
                <TableCell align='right'>{exam.name}</TableCell>
                <TableCell align='right'>{exam.description}</TableCell>
                <TableCell align='right'>{exam.questions.length}</TableCell>
                <TableCell align='right'>
                  <span style={getStatusStyles(exam.status)}>
                    {exam.status}
                  </span>
                </TableCell>
                <TableCell align='right'>{exam.attemptedBy.length}</TableCell>
                <TableCell align='right'>
                  {/* <Button
                    endIcon={<Icon icon='clarity:details-line' />}
                    onClick={() => handleViewDetails(exam._id)}
                  >
                    View Details
                  </Button> */}
                  <MoreOptionsMenu
                    viewDetails={() => handleViewDetails(exam._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// * More options menu

function MoreOptionsMenu({ viewDetails }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? 'more-option-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Icon icon='charm:menu-kebab' />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'more-option-menu',
        }}
      >
        <MenuItem onClick={viewDetails}>View Details</MenuItem>
      </Menu>
    </div>
  );
}
