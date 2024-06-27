import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1b1d1b',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#151529',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'gray',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#282738',
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#475569',
    color: theme.palette.common.white,
    padding: '6px 10px',
    height: '50px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '6px 10px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  height: '40px', 
}));

const Room = () => {
  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false);
  const [openEditTaskDialog, setOpenEditTaskDialog] = useState(false);
  const [formData, setFormData] = useState({
    room_id: '',
    room_name: '',
    status: ''
  });
  const [editFormData, setEditFormData] = useState({
    room_id: '',
    room_name: '',
    status: ''
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Set the number of items per page
  const [searchQuery, setSearchQuery] = useState('');

  // reterival of data for server

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:6600/getroom');
      setData(res.data.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6600/postroom', formData);
      fetchData();
      handleCloseAddTaskDialog();
    } catch (error) {
      console.log(error);
      handleCloseAddTaskDialog();
    }
  };

  const handleEditTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:6600/putroom/${editFormData.room_id}`, editFormData);
      fetchData();
      handleCloseEditTaskDialog();
    } catch (error) {
      console.log(error);
      handleCloseEditTaskDialog();
    }
  };

  const handleOpenAddTaskDialog = () => {
    setOpenAddTaskDialog(true);
  };

  const handleCloseAddTaskDialog = () => {
    setOpenAddTaskDialog(false);
  };

  const handleOpenEditTaskDialog = (item) => {
    setEditFormData(item);
    setOpenEditTaskDialog(true);
  };

  const handleCloseEditTaskDialog = () => {
    setOpenEditTaskDialog(false);
  };

  const handleAddTaskChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditTaskChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = data.filter(item =>
    (item.room_name && item.room_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    
      (item.room_id && item.room_id.toLowerCase().includes(searchQuery.toLowerCase()))

  );

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div>


      <CustomTextField
        variant="outlined"
        placeholder="Search by Room Name..."
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          margin: '3px',
          width: '200px',
          marginTop: '13px',
          '& .MuiInputBase-root': {
            padding: '4px',
            height: '32px',
            backgroundColor: '#f3f3f3',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '3',
            },
          },
        }}
        InputProps={{
          endAdornment: <SearchIcon />,
          style: { fontSize: '14px' }
        }}
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#1e293b',
          margin: '3px',
          marginTop: '15px',
          minWidth: '32px',
          minHeight: '32px',
          padding: '4px',
          width: 'auto',
          height: 'auto',
          '&:hover': {
            backgroundColor: '#1e293b'
          }
        }}
        onClick={handleOpenAddTaskDialog}
      >
        <AddIcon />
      </Button>

      <TableContainer component={Paper} sx={{ minWidth: 300 }}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#475569' }}>
              <StyledTableCell sx={{ color: '#ffffff' }}>Sno</StyledTableCell>
              <StyledTableCell sx={{ color: '#ffffff' }}>Room id</StyledTableCell>
              <StyledTableCell sx={{ color: '#ffffff' }}>Room Name</StyledTableCell>
              <StyledTableCell sx={{ color: '#ffffff' }}>Status</StyledTableCell>
              <StyledTableCell sx={{ color: '#ffffff' }}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((item, index) => (
              <StyledTableRow key={index + 1} sx={{ backgroundColor: '#f3f3f3', '&:hover': { backgroundColor: '#e2e8f0' } }}>
                <StyledTableCell>{startIndex + index + 1}</StyledTableCell>
                <StyledTableCell>{item.room_id}</StyledTableCell>
                <StyledTableCell>{item.room_name}</StyledTableCell>
                <StyledTableCell sx={{ color: item.status === 'Active' ? '#22c55e' : '#ef4444' }}>
                  {item.status}
                </StyledTableCell>
                <StyledTableCell>
                  <EditIcon
                    onClick={() => handleOpenEditTaskDialog(item)}
                    sx={{ color: '#1e293b', fontSize: '20px' }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddTaskDialog} onClose={handleCloseAddTaskDialog}>
        <DialogTitle>Assign New Room</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddTaskSubmit}>
            <CustomTextField
              name="room_id"
              label="Room Id"
              value={formData.room_id}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="room_name"
              label="Room Name"
              value={formData.room_name}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={editFormData.status}
                onChange={handleEditTaskChange}
                label="Status"
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Deactive">Deactive</MenuItem>
              </Select>
            </FormControl>
            <DialogActions>
              <Button onClick={handleCloseAddTaskDialog} sx={{ color: 'black' }}>Cancel</Button>
              <Button type="submit" color="primary" sx={{ color: 'black' }}>Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openEditTaskDialog} onClose={handleCloseEditTaskDialog}>
        <DialogTitle>Edit Room</DialogTitle>
        <DialogContent>
          <form onSubmit={handleEditTaskSubmit}>
            <CustomTextField
              name="room_id"
              label="Room Id"
              value={editFormData.room_id}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="room_name"
              label="Room name"
              value={editFormData.room_name}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={editFormData.status}
                onChange={handleEditTaskChange}
                label="Status"
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Deactive">Deactive</MenuItem>
              </Select>
            </FormControl>

            <DialogActions>
              <Button onClick={handleCloseEditTaskDialog} sx={{ color: 'black' }}>Cancel</Button>
              <Button type="submit" color="primary" sx={{ color: 'black' }}>Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Stack spacing={2} sx={{ marginTop: 2, alignItems: 'end' }}>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </div>
  );
};

export default Room;























