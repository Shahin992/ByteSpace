// @ts-nocheck
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Avatar,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/useAppStore';
import { logout } from '../../../store/slices/authSlice';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Creators', path: '/instructors' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: trigger ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          borderBottom: trigger ? '1px solid rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: 1 }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 5 },
            }}
          >
            <Box 
              component="img" 
              src={trigger ? "/assets/branding/footer-logo.svg" : "/assets/branding/header-logo.svg"} 
              sx={{ height: 32, objectFit: 'contain', transition: 'all 0.3s ease' }} 
              alt="ByteSpace" 
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                gap: 5,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: trigger ? 'text.primary' : 'rgba(255,255,255,0.9)',
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    px: 1.5,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: location.pathname === link.path ? '70%' : 0,
                      height: 2,
                      bgcolor: '#BEFF00',
                      borderRadius: 1,
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': { width: '70%' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* CTA Buttons */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              {isAuthenticated ? (
                <>
                  <Avatar
                    src={user?.avatar}
                    sx={{ width: 36, height: 36, cursor: 'pointer', bgcolor: 'primary.main' }}
                  >
                    {user?.name?.charAt(0)}
                  </Avatar>
                  <Button
                    onClick={handleLogout}
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: 50,
                      borderColor: trigger ? 'primary.main' : 'rgba(255,255,255,0.6)',
                      color: trigger ? 'primary.main' : '#fff',
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/login"
                    sx={{
                      color: trigger ? 'text.primary' : '#fff',
                      fontWeight: 500,
                      textTransform: 'none',
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    sx={{
                      color: trigger ? 'text.primary' : '#fff',
                      fontWeight: 500,
                      textTransform: 'none',
                    }}
                  >
                    Join Us
                  </Button>
                  <IconButton sx={{ color: trigger ? 'text.primary' : '#fff', ml: 1 }}>
                    <LocalMallOutlinedIcon />
                  </IconButton>
                </>
              )}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: trigger ? 'text.primary' : '#fff' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 300, pt: 2 } }}
      >
        <Box sx={{ px: 3, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box 
            component="img" 
            src="/assets/branding/footer-logo.svg" 
            sx={{ height: 28, objectFit: 'contain' }} 
            alt="ByteSpace" 
          />
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton
                component={Link}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                selected={location.pathname === link.path}
                sx={{ borderRadius: 2, mx: 1, my: 0.3 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {isAuthenticated ? (
            <Button
              fullWidth
              variant="outlined"
              onClick={() => { handleLogout(); setDrawerOpen(false); }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                fullWidth
                variant="outlined"
                component={Link}
                to="/login"
                onClick={() => setDrawerOpen(false)}
              >
                Log In
              </Button>
              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/signup"
                onClick={() => setDrawerOpen(false)}
                sx={{ bgcolor: '#BEFF00', color: '#050505', fontWeight: 700, '&:hover': { bgcolor: '#CCFF00' } }}
              >
                Sign Up Free
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
