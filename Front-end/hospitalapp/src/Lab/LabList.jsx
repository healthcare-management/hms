import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import axios from 'axios';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';

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

function LabList() {
  const [data, setData] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editFormData, setEditFormData] = useState({
    lab_no: '',
    lab_name: '',
    room_id: '',
    department_id: ''
  });

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:6600/getlab');
      setData(res.data.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteapi = (lab_no) => {
    axios.delete(`http://localhost:6600/deletelab/${lab_no}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false);
  const [formData, setFormData] = useState({
    lab_no: '',
    lab_name: '',
    room_id: '',
    department_id: ''
  });

  const postapi = (e) => {
    e.preventDefault();
    axios.post("http://localhost:6600/postlab", formData)
      .then(() => {
        fetchData();
        handleCloseAddTaskDialog();
      })
      .catch((error) => {
        console.log(error);
        handleCloseAddTaskDialog();
      });
  };

  const updateapi = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:6600/putlab/${editFormData.lab_no}`, editFormData)
      .then(() => {
        fetchData();
        handleCloseEditDialog();
      })
      .catch((error) => {
        console.log(error);
        handleCloseEditDialog();
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = data.filter(item =>
    item.lab_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleOpenAddTaskDialog = () => {
    setOpenAddTaskDialog(true);
  };

  const handleCloseAddTaskDialog = () => {
    setOpenAddTaskDialog(false);
  };

  const handleOpenEditDialog = (lab) => {
    setEditFormData(lab);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
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

  return (
    <>
    <CustomTextField
  variant="outlined"
  placeholder="Search by Lab Name..."
  value={searchQuery}
  onChange={handleSearchChange}
  sx={{
    margin: '3px',
    width: '200px', 
    marginTop:'13px',
    '& .MuiInputBase-root': {
      padding: '4px', 
      height: '32px', 
      backgroundColor:'#f3f3f3',
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
    minWidth: '32px',   // Adjust the minWidth as needed
    minHeight: '32px',  // Adjust the minHeight as needed
    padding: '4px',     // Adjust the padding as needed
    width: 'auto',      // Optionally set a fixed width
    height: 'auto',     // Optionally set a fixed height
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
            <TableRow>
              <StyledTableCell>Sno</StyledTableCell>
              <StyledTableCell>Lab No</StyledTableCell>
              <StyledTableCell>Lab Name</StyledTableCell>
              <StyledTableCell>Room Id</StyledTableCell>
              <StyledTableCell>Department Id</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => (
              <StyledTableRow
                key={startIndex + index + 1}
                sx={{
                  backgroundColor: '#f3f3f3',
                  '&:hover': {
                    backgroundColor: '#d3d6d2',
                  },
                }}
              >
                <StyledTableCell>{startIndex + index + 1}</StyledTableCell>
                <StyledTableCell>{item.lab_no}</StyledTableCell>
                <StyledTableCell>{item.lab_name}</StyledTableCell>
                <StyledTableCell>{item.room_id}</StyledTableCell>
                <StyledTableCell>{item.department_id}</StyledTableCell>
                <StyledTableCell>
                  <EditIcon sx={{ color: '#1e293b', fontSize: '20px' }} onClick={() => handleOpenEditDialog(item)} />
                  <DeleteIcon sx={{ color: '#1e293b', fontSize: '20px', marginLeft: '20px' }} onClick={() => deleteapi(item.lab_no)} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddTaskDialog} onClose={handleCloseAddTaskDialog}>
        <DialogTitle>Assign New Lab</DialogTitle>
        <DialogContent>
          <form onSubmit={postapi}>
            <CustomTextField
              name="lab_no"
              label="Lab No"
              value={formData.lab_no}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="lab_name"
              label="Lab Name"
              value={formData.lab_name}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="room_id"
              label="Room Id"
              value={formData.room_id}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="department_id"
              label="Department Id"
              value={formData.department_id}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button onClick={handleCloseAddTaskDialog} sx={{ color: 'black' }}>Cancel</Button>
              <Button type="submit" color="primary" sx={{ color: 'black' }}>Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Lab</DialogTitle>
        <DialogContent>
          <form onSubmit={updateapi}>
            <CustomTextField
              name="lab_no"
              label="Lab No"
              value={editFormData.lab_no}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="lab_name"
              label="Lab Name"
              value={editFormData.lab_name}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="room_id"
              label="Room ID"
              value={editFormData.room_id}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="department_id"
              label="Department Id"
              value={editFormData.department_id}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button onClick={handleCloseEditDialog} sx={{ color: 'black' }}>Cancel</Button>
              <Button type="submit" color="primary" sx={{ color: 'black' }}>Update</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Stack spacing={1} sx={{ marginTop: 2, alignItems: 'end' }}>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </>
  );
}

export default LabList;
