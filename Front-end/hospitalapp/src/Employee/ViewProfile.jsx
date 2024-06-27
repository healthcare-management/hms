import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, Card, CardContent, IconButton, Box, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PreviewIcon from '@mui/icons-material/Preview';


import CardMedia from '@mui/material/CardMedia';




function ViewProfile({ employee_id }) {
  const [profileData, setProfileData] = useState(null);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);

  useEffect(() => {
    function fetchData(employee_id) {
      fetch(`http://localhost:6600/getemployeeprofile/${employee_id}`)
        .then((res) => res.json())
        .then((result) => setProfileData(result[0])) // Access the first element of the array
        .catch((error) => console.error('Error fetching data:', error));
    }

    fetchData(employee_id);
  }, [employee_id]);

  const handleOpenProfileDialog = () => {
    setOpenProfileDialog(true);
  };

  const handleCloseProfileDialog = () => {
    setOpenProfileDialog(false);
  };

  if (!profileData) {
    return null; // Render nothing while data is being fetched
  }

  return (
    <div>
      <PreviewIcon
        sx={{ color: '#1e293b', fontSize: '20px', marginLeft: '20px' }}
        onClick={handleOpenProfileDialog}
      />
      <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog} sx= {{backgroundColor:'#1e293b'}}>
        <DialogTitle>Employee Profile</DialogTitle>
        <DialogContent>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {profileData.profile_name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Employee ID: {profileData.employee_id}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Age: {profileData.age}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Gender: {profileData.gender}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Contact No: {profileData.contact_no}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Address: {profileData.address}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Salary: {profileData.salary}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Date of Joining: {new Date(profileData.date_of_joining).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Date of Birth: {new Date(profileData.date_of_birth).toLocaleDateString()}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, borderRadius: '50%' }}
              height="140"
              image={profileData.image}
              alt="Employee Profile"
            />
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileDialog} sx={{ color: 'black' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ViewProfile;
