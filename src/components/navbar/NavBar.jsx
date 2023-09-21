import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { doLogout, isActor, isLoggedIn, userRole } from '../../auth/authDetails';
import { toast } from 'react-toastify';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Magazine', path: '/magazine' },
  { label: 'Find Talent', path: '/talent' },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff', // Replace with your desired color
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            marginInline: '0.2rem',
            transition: 'background-color 0.9s',
            '&:hover': {
              backgroundColor: '#0909ef1f',
              color: 'blue',
            },
          },
        },
      },
    },
  });

  const logout = () => {
    doLogout();
    navigate('');
    toast.success('You have logout successfully.');
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="dynamic">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '',
                textDecoration: 'none',
              }}
            >
              ForScreens
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navLinks.map((link, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Button component={Link} to={link.path} sx={{ color: '#000' }} textAlign="center">
                      {link.label}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '',
                textDecoration: 'none',
              }}
            >
              ForScreen
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link, index) => (
                <Button key={index} component={Link} to={link.path} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#000', display: 'block' }}>
                  {link.label}
                </Button>
              ))}
            </Box>
            {isLoggedIn() && isActor() && (
              <Box>
                <Link to="/register1">
                  <Button key="joinForScreens" sx={{ color: 'blue' }} variant="contained">
                    Join For Screens
                  </Button>
                </Link>
              </Box>
            )}
            {isLoggedIn() && !isActor() && (
              <Box>
                <Link to="/dashboard">
                  <Button key="dashboard" sx={{ color: 'blue' }} variant="contained">
                    Find Actor
                  </Button>
                </Link>
              </Box>
            )}

            {isLoggedIn() ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* {menuLinks.map((link, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Button component={Link} to={link.path} sx={{ color: '#000' }} textAlign="center">
                        {link.label}
                      </Button>
                    </MenuItem>
                  ))} */}
                  <MenuItem key={1} onClick={handleCloseUserMenu}>
                    <Button component={Link} to={'/profile'} sx={{ color: '#000' }} textAlign="center">
                      Profile
                    </Button>
                  </MenuItem>
                  <MenuItem key={2} onClick={handleCloseUserMenu}>
                    <Button component={Link} onClick={logout} sx={{ color: '#000' }} textAlign="center">
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box>
                <Link to="/login">
                  <Button key="login" sx={{ color: 'blue' }} variant="outlined">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button key="signup" sx={{ color: 'blue' }} variant="contained">
                    Sign Up
                  </Button>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
