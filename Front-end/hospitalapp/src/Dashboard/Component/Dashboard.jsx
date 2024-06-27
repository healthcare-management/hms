import React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import HealingIcon from '@mui/icons-material/Healing';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InputBase from '@mui/material/InputBase';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import MasksIcon from '@mui/icons-material/Masks';
import BadgeIcon from '@mui/icons-material/Badge';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Container } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Charts from './Charts';
import { Outlet, useNavigate } from 'react-router-dom';



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
  padding: theme.spacing(0, 1),
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

function Main() {
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

  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
       
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100, backgroundColor: '#a7f3d0', boxShadow: 7, }}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <MasksIcon sx={{ fontSize: '200%', borderRadius: '50%', color: '#1e293b' }} /> Total patient
                </Typography>
                <Typography variant="h5" component="div">
                  2500+
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100 , backgroundColor: '#fde68a',boxShadow: 7}}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <FactCheckIcon sx={{ fontSize: '170%', borderRadius: '50%', color: '#1e293b' }} /> Total Appointment
                </Typography>
                <Typography variant="h5" component="div">
                  350+
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100, backgroundColor: '#fecaca',boxShadow: 7 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <HealingIcon sx={{ fontSize: '170%', borderRadius: '50%', color: '#1e293b' }} /> Total Surgery
                </Typography>
                <Typography variant="h5" component="div">
                  1500+
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 100, backgroundColor: '#d9f99d' ,boxShadow: 7}}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  <AccountBalanceIcon sx={{ fontSize: '170%', borderRadius: '50%', color: '#1e293b' }} /> Total Revenue
                </Typography>
                <Typography variant="h5" component="div">
                  $122500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Charts />

<Outlet/>
      </Box>
    </Box>
  );
}

export default Main;
