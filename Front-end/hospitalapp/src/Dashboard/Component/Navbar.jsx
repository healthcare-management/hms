import React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SickIcon from '@mui/icons-material/Sick';
import BadgeIcon from '@mui/icons-material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InputBase from '@mui/material/InputBase';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import SearchIcon from '@mui/icons-material/Search';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ScienceIcon from '@mui/icons-material/Science';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Paper from '@mui/material/Paper';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Outlet, useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';



const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 0.5), // Adjusted padding here
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  
 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

 


  const navigate = useNavigate()

  const handleDashboard = ()=>{
    navigate('/dashboard')
  }


  const handleRoom = ()=>{
    navigate('/room')   


  }
  const handleDepartment = ()=>{
    navigate('/department')
  }


  const handleRole = ()=>{
    navigate('/role')
  }
  
  const handleEmployee = ()=>{
    navigate('/employee')
  }

  const handleLab = ()=>{
    navigate('/lab')
  }
 
  
  const handlePatient = ()=>{
    navigate('/patient')
  }

  const handleEmployeeProfile = ()=>{
    navigate('/employeeprofile')
  }
 
  const handleHospitalTreatment = ()=>{
    navigate('/hospitaltreatment')
  }

  const handleAssignrole = ()=>{
    navigate('/assignrole')
  }

  const handleAppointment = ()=>{
    navigate('/appointment')
  }
 
 

  



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1e293b' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{ backgroundColor: '#1e293b', height:'50px' }}>
          {/* <HealingIcon sx={{color:'white'}}/> */}
          <img
          src='https://img.freepik.com/free-vector/doctor-office-logo-template_23-2149665596.jpg?size=626&ext=jpg&ga=GA1.1.52611224.1716370553&semt=ais_user'
          alt="Logo"
          style={{ height: '120px' ,width:'150px'}} // Adjust the height as needed
        />

{/* /////////////////////////////////////////image///////////////////////////// */}
          <IconButton onClick={handleDrawerClose} sx={{ backgroundColor: '#1e293b', color: 'white' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        {/* ////////////////////////////////////////////////////////// */}

        <List sx={{backgroundColor:'#1e293b', color: 'white',padding:0.3}}>
        {['Dashboard'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleDashboard}>
            <ListItemButton>
              <ListItemIcon>
                
                {index === 0 && <DashboardIcon sx={{color:'white', fontSize:'22px'}} onClick={handleDashboard}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

       
        <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Room'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleRoom}>
            <ListItemButton>
              <ListItemIcon>
                
                {index === 0 && <MeetingRoomIcon sx={{color:'white',fontSize:'22px'}} onClick={handleRoom}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
              
      <List sx={{backgroundColor:'#1e293b', color: 'white',padding:0.3}}>
        {['Department'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleDepartment}>
            <ListItemButton>
              <ListItemIcon>
                
                {index === 0 && <BusinessIcon sx={{color:'white',fontSize:'22px'}} onClick={handleDepartment}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Role'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleRole}>
            <ListItemButton>
              <ListItemIcon>
                
                {index === 0 && <GroupWorkIcon sx={{color:'white',fontSize:'22px'}} onClick={handleRole}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Employee'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleEmployee}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <BadgeIcon sx={{color:'white',fontSize:'22px'}} onClick={handleEmployee}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Lab'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleLab}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <ScienceIcon sx={{color:'white',fontSize:'22px'}} onClick={handleLab}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Patient'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handlePatient}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <SickIcon sx={{color:'white',fontSize:'22px'}} onClick={handlePatient}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Employee Profile'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleEmployeeProfile}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <FolderSharedIcon sx={{color:'white',fontSize:'22px'}} onClick={handleEmployeeProfile}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Treatment'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleHospitalTreatment}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <MedicationLiquidIcon sx={{color:'white',fontSize:'22px'}} onClick={handleHospitalTreatment}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Assign Role'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleAssignrole}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <HomeWorkIcon sx={{color:'white',fontSize:'22px'}} onClick={handleAssignrole}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />

            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ backgroundColor:'#1e293b', color:'white',padding:0.3}}>
        {['Appointment'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleAppointment}>
            <ListItemButton>
              <ListItemIcon>
                   
                {index === 0 && <MeetingRoomIcon sx={{color:'white',fontSize:'22px'}} onClick={handleAppointment}/>}
               
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontSize: '15px' }} />

            </ListItemButton>
          </ListItem>
        ))}
      </List>
        <Divider />
      </Drawer>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <DrawerHeader />
     

     <Outlet/>
   </Box>
 
    </Box>
   
    
  );
}
   
export default Sidebar;
