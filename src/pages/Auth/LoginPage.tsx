import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button, Paper, InputAdornment, IconButton, Divider
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SchoolIcon from '@mui/icons-material/School';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppStore';
import { loginSuccess } from '../../store/slices/authSlice';
import { showNotification } from '../../store/slices/uiSlice';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        loginSuccess({
          id: '1',
          name: 'Jane Doe',
          email,
          role: 'student',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
        })
      );
      dispatch(showNotification({ message: 'Welcome back!', severity: 'success' }));
      navigate('/');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', bgcolor: '#F8F9FF' }}>
      {/* Left Form */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, width: '100%', maxWidth: 480, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, justifyContent: 'center' }}>
            <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SchoolIcon sx={{ color: '#fff', fontSize: 18 }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>ByteSpace</Typography>
          </Box>
          <Typography variant="h4" sx={{ mb: 1,  fontWeight: 800 }} >Welcome back</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Don't have an account? <Link to="/signup" style={{ color: '#1919FC', fontWeight: 600 }}>Sign up free</Link>
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700,  mb: 1, display: 'block' }}>Email Address</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 700 }}>Password</Typography>
                <Typography component={Link} to="#" variant="caption" sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}>
                  Forgot password?
                </Typography>
              </Box>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 1, fontWeight: 700 }}
            >
              Log In
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Right Image Cover */}
      <Box
        sx={{
          flex: 1.2,
          display: { xs: 'none', lg: 'block' },
          bgcolor: '#050505',
          backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5,5,5,0.6)' }} />
        <Box sx={{ position: 'absolute', inset: 0, p: 8, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Typography variant="h2" color="#fff" sx={{ mb: 2,  fontWeight: 900 }} >
            Unlock Your<br /><span style={{ color: '#BEFF00' }}>Potential</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 400 }}>
            Join a community of thousands of learners achieving their goals with ByteSpace.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
