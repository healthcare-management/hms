import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
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
import axios from 'axios';

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
    padding: '6px 10px', // Adjust padding for body cells
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  height: '40px', // Adjust the height for the rows
}));

function EmployeeProfileList() {
  const initialFormData = {
    profile_id: '',
    profile_name: '',
    age: '',
    gender: '',
    contact_no: '',
    address: '',
    salary: '',
    date_of_joining: '',
    date_of_birth: '',
    employee_id: '',
    image: null, // file object for image
  };

  const initialEditFormData = {
    profile_id: '',
    profile_name: '',
    age: '',
    gender: '',
    contact_no: '',
    address: '',
    salary: '',
    date_of_joining: '',
    date_of_birth: '',
    employee_id: '',
    image: null, // file object for image
  };

  const [data, setData] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editFormData, setEditFormData] = useState(initialEditFormData);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:6600/getallemployeeprofile');

      const newData = res.data.rows.map(item => ({
        ...item,
        date_of_joining: moment(item.date_of_joining).format('YYYY-MM-DD'),
        date_of_birth: moment(item.date_of_birth).format('YYYY-MM-DD')
      }));
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteapi = (profile_id) => {
    axios.delete(`http://localhost:6600/deleteemployeeprofile/${profile_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const postapi = (e) => {
    e.preventDefault();
    const formDataWithImage = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithImage.append(key, value);
    });
    axios.post("http://localhost:6600/postemployeeprofile", formDataWithImage)
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
    const formDataWithImage = new FormData();
    Object.entries(editFormData).forEach(([key, value]) => {
      if (key === 'image' && value === null) {
        // If no new image is selected, retain the existing image
        formDataWithImage.append(key, editFormData[key]);
      } else {
        formDataWithImage.append(key, value);
      }
    });
    axios.put(`http://localhost:6600/putemployeeprofile/${editFormData.profile_id}`, formDataWithImage)
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
    item.profile_name && item.profile_name.toLowerCase().includes(searchQuery.toLowerCase())
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
    setFormData({ ...initialFormData, image: null }); // Clear form data including image
  };

  const handleOpenEditDialog = (employeeprofile) => {
    setEditFormData({
      ...employeeprofile,
      date_of_joining: moment(employeeprofile.date_of_joining).format('YYYY-MM-DD'),
      date_of_birth: moment(employeeprofile.date_of_birth).format('YYYY-MM-DD'),
      image: null, // Reset image field for editing
    });
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setEditFormData({ ...initialEditFormData, image: null }); // Clear edit form data including image
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

  const handleAddImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    setEditFormData({ ...editFormData, image: file });
  };

  return (
    <>
      <CustomTextField
        variant="outlined"
        placeholder="Search by Profile Name..."
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
            <TableRow>
              <StyledTableCell>Sno</StyledTableCell>
              <StyledTableCell>Profile Id</StyledTableCell>
              <StyledTableCell>Profile Image</StyledTableCell>
              <StyledTableCell>Profile Name</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Contact No</StyledTableCell>
             
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Salary</StyledTableCell>
              <StyledTableCell>DOJ</StyledTableCell>
              <StyledTableCell>DOB</StyledTableCell>
              <StyledTableCell>Employee Id</StyledTableCell>
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
                <StyledTableCell>{item.profile_id}</StyledTableCell>
                <StyledTableCell>
                  <img
                    src={item.image}
                    alt={item.profile_name}
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '50%',
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell>{item.profile_name}</StyledTableCell>
                <StyledTableCell>{item.age}</StyledTableCell>
                <StyledTableCell>{item.gender}</StyledTableCell>
                <StyledTableCell>{item.contact_no}</StyledTableCell>
                <StyledTableCell>{item.address}</StyledTableCell>
                <StyledTableCell>{item.salary}</StyledTableCell>
                <StyledTableCell>{item.date_of_joining}</StyledTableCell>
                <StyledTableCell>{item.date_of_birth}</StyledTableCell>
                <StyledTableCell>{item.employee_id}</StyledTableCell>
                <StyledTableCell>
                  <EditIcon
                    sx={{
                      color: '#1e293b',
                      fontSize: '20px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleOpenEditDialog(item)}
                  />
                  <DeleteIcon
                    sx={{
                      color: '#1e293b',
                      fontSize: '20px',
                      marginLeft: '20px',
                      cursor: 'pointer',
                    }}
                    onClick={() => deleteapi(item.profile_id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddTaskDialog} onClose={handleCloseAddTaskDialog}>
        <DialogTitle>Add New Employee Profile</DialogTitle>
        <DialogContent>
          <form onSubmit={postapi}>
            <CustomTextField
              name="profile_id"
              label="Profile Id"
              value={formData.profile_id}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="profile_name"
              label="Profile Name"
              value={formData.profile_name}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="age"
              label="Age"
              value={formData.age}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="gender"
              label="Gender"
              value={formData.gender}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="contact_no"
              label="Contact No"
              value={formData.contact_no}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="salary"
              label="Salary"
              value={formData.salary}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="date_of_joining"
              label="Date Of Joining"
              type="date"
              value={formData.date_of_joining}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CustomTextField
              name="date_of_birth"
              label="Date Of Birth"
              type="date"
              value={formData.date_of_birth}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CustomTextField
              name="employee_id"
              label="Employee Id"
              value={formData.employee_id}
              onChange={handleAddTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="image"
              label="Image"
              type="file"
              onChange={handleAddImageChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <DialogActions>
              <Button onClick={handleCloseAddTaskDialog} sx={{ color: 'black' }}>
                Cancel
              </Button>
              <Button type="submit" color="primary" sx={{ color: 'black' }}>
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Employee Profile</DialogTitle>
        <DialogContent>
          <form onSubmit={updateapi}>
            <CustomTextField
              name="profile_id"
              label="Profile Id"
              value={editFormData.profile_id}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="profile_name"
              label="Profile Name"
              value={editFormData.profile_name}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="age"
              label="Age"
              value={editFormData.age}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="gender"
              label="Gender"
              value={editFormData.gender}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="contact_no"
              label="Contact No"
              value={editFormData.contact_no}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="address"
              label="Address"
              value={editFormData.address}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="salary"
              label="Salary"
              value={editFormData.salary}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
            />
            <CustomTextField
              name="date_of_joining"
              label="Date Of Joining"
              type="date"
              value={editFormData.date_of_joining}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CustomTextField
              name="date_of_birth"
              label="Date Of Birth"
              type="date"
              value={editFormData.date_of_birth}
              onChange={handleEditTaskChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CustomTextField
              name="image"
              label="Image"
              type="file"
              onChange={handleEditImageChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <DialogActions>
              <Button onClick={handleCloseEditDialog} sx={{ color: 'black' }}>
                Cancel
              </Button>
              <Button type="submit" color="primary" sx={{ color: 'black' }}>
                Update
              </Button>
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

export default EmployeeProfileList;
