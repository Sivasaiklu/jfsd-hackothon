import * as React from 'react';
import { useNavigate } from 'react-router-dom';  // Import navigate for routing
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ["Home" ,'Signup', 'Signin', 'Courses' , "InstitutionalServices", 'Feedback', "Contact", "Logout"];

function ResponsiveAppBar({ store }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    store.dispatch({ type: 'page', data: event.currentTarget.getAttribute('cp') });
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    navigate('/SignIn'); // Redirect to Signin page on logout
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section on the Left */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYjAL7I5uJ_9T_CNPzrjEB1t32dmLBOczyA&s"
              className="App-logo"
              alt="logo"
              style={{ width: 40, height: 40, marginRight: 8 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FeedBack Management System
            </Typography>
          </Box>

          {/* Menu for Larger Screens - Aligning to the right */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', width: '100%' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={page === 'Logout' ? handleLogout : handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                cp={page}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon - Aligning to the right */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              onClose={() => setAnchorElNav(null)}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  cp={page}
                  onClick={page === 'Logout' ? handleLogout : handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
