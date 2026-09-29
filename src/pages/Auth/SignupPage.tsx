// @ts-nocheck
import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button, Paper, InputAdornment, IconButton, Grid, Divider
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SchoolIcon from '@mui/icons-material/School';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppStore';
import { loginSuccess } from '../../store/slices/authSlice';
import { showNotification } from '../../store/slices/uiSlice';

const SignupPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && firstName) {
      dispatch(
        loginSuccess({
          id: '1',
          name: `${firstName} ${lastName}`,
          email,
          role: 'student',
        })
      );
      dispatch(showNotification({ message: 'Account created successfully! 🎉', severity: 'success' }));
      navigate('/');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', bgcolor: '#F8F9FF' }}>
      {/* Right Image Cover */}
      <Box
        sx={{
          flex: 1.2,
          display: { xs: 'none', lg: 'block' },
          bgcolor: '#050505',
          backgroundImage: 'url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5,5,5,0.7)' }} />
        <Box sx={{ position: 'absolute', inset: 0, p: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h2" color="#fff" sx={{ mb: 2,  fontWeight: 900 }} >
            Start Learning<br />With <span style={{ color: '#BEFF00' }}>Experts</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 400 }}>
            Create an account to get unlimited access to 800+ courses, professional certificates, and a global learning community.
          </Typography>
        </Box>
      </Box>

      {/* Left Form */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, width: '100%', maxWidth: 480, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, justifyContent: 'center' }}>
            <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SchoolIcon sx={{ color: '#fff', fontSize: 18 }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>ByteSpace</Typography>
          </Box>
          <Typography variant="h4" sx={{ mb: 1,  fontWeight: 800 }} >Create an account</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Already have an account? <Link to="/login" style={{ color: '#1919FC', fontWeight: 600 }}>Log in</Link>
          </Typography>

          <Box component="form" onSubmit={handleSignup} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography variant="caption" sx={{ fontWeight: 700,  mb: 1, display: 'block' }}>First Name</Typography>
                <TextField fullWidth size="small" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Grid>
              <Grid size={6}>
                <Typography variant="caption" sx={{ fontWeight: 700,  mb: 1, display: 'block' }}>Last Name</Typography>
                <TextField fullWidth size="small" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </Grid>
            </Grid>

            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700,  mb: 1, display: 'block' }}>Email Address</Typography>
              <TextField fullWidth size="small" placeholder="Enter your email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700,  mb: 1, display: 'block' }}>Password</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Create a password"
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
            
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              By signing up, you agree to our <Link to="#" style={{ color: '#1919FC' }}>Terms of Service</Link> and <Link to="#" style={{ color: '#1919FC' }}>Privacy Policy</Link>.
            </Typography>

            <Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: 1, fontWeight: 700, bgcolor: '#BEFF00', color: '#050505', '&:hover': { bgcolor: '#CCFF00' } }}>
              Sign Up Free
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignupPage;
