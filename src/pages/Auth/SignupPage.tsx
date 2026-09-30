// @ts-nocheck
import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button, Paper, InputAdornment, IconButton, Grid, Avatar
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppStore';
import { loginSuccess } from '../../store/slices/authSlice';
import { showNotification } from '../../store/slices/uiSlice';

const SignupPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && fullName) {
      dispatch(
        loginSuccess({
          id: '1',
          name: fullName,
          email,
          role: 'student',
        })
      );
      dispatch(showNotification({ message: 'Account created successfully! 🎉', severity: 'success' }));
      navigate('/');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', bgcolor: '#0647F9', position: 'relative', overflow: 'hidden' }}>
      {/* Background Grid - CSS Pattern */}
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, display: 'flex', flex: 1, py: 4 }}>
        <Grid container spacing={4} sx={{ flex: 1, alignItems: 'center' }}>
          
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 4 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
              <Box component="img" src="/assets/branding/fav-logo.svg" sx={{ width: 40, height: 40 }} />
            </Box>
            
            {/* Typography */}
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 2, fontFamily: 'Clash Display, sans-serif' }}>
              Sign up and come in
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.125rem', lineHeight: 1.6, maxWidth: 500, mb: 4 }}>
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </Typography>
            
            {/* Graphics Cluster - Relative Container */}
            <Box sx={{ position: 'relative', width: '100%', height: 650, flex: 1, display: { xs: 'none', lg: 'block' }, mt: 0, ml: 2, transform: 'scale(0.85)', transformOrigin: 'top left' }}>
               
               {/* Dashboard Image (Back/Lower Card) - "Build Digital" */}
               <Paper sx={{ position: 'absolute', top: 90, left: 25, width: 384, p: 2, borderRadius: '24px', zIndex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <Box sx={{ position: 'relative', mb: 2 }}>
                    <Box component="img" src="/assets/auth/auth-page-behind-card-image.png" sx={{ width: '100%', borderRadius: '16px', height: 200, objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: 'rgba(255,255,255,0.8)', px: 1.5, py: 0.5, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                      17 Lessons
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, fontSize: '1.25rem', fontFamily: 'Clash Display, sans-serif', color: '#1A1A1A' }}>Build Digital</Typography>
                  <Typography variant="caption" sx={{ color: '#6B7280', mb: 2, display: 'block' }}>by <span style={{ color: '#0647F9' }}>purepearl studio</span></Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                     <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F3F4F6', px: 1.5, py: 0.5, borderRadius: '100px', mr: 2 }}>
                        <Box component="span" sx={{ mr: 0.5, display: 'flex' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11H11M3 6V9M6 3V9M9 1V9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#1A1A1A' }}>Beginner</Typography>
                     </Box>
                     <Box sx={{ display: 'flex' }}>
                       <Avatar sx={{ width: 24, height: 24, border: '2px solid white' }} src="/assets/review/reviewer-1.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-2.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-3.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-2.png" />
                       <Box sx={{ width: 24, height: 24, ml: -1, borderRadius: '50%', bgcolor: '#000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, border: '2px solid white' }}>26+</Box>
                     </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 800, color: '#0647F9', fontSize: '1.25rem' }}>$25<Typography component="span" sx={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: 500 }}>/lifetime</Typography></Typography>
                  </Box>
               </Paper>
               
               {/* White Card (Front/Upper Card) - "the Power of Big Data" */}
               <Paper sx={{ position: 'absolute', top: -20, left: 160, width: 384, p: 2, borderRadius: '24px', zIndex: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                  <Box sx={{ position: 'relative', mb: 2 }}>
                    <Box component="img" src="/assets/auth/auth-page top-card-image.png" sx={{ width: '100%', borderRadius: '16px', height: 220, objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', gap: 1 }}>
                      <Box sx={{ bgcolor: 'rgba(255,255,255,0.8)', px: 1.5, py: 0.5, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                        17 Lessons
                      </Box>
                      <Box sx={{ bgcolor: 'rgba(255,255,255,0.8)', px: 1.5, py: 0.5, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                        2 hours 16 mins
                      </Box>
                      <Box sx={{ bgcolor: 'rgba(255,255,255,0.8)', px: 1.5, py: 0.5, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                        59 Comments
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                     <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.25rem', fontFamily: 'Clash Display, sans-serif', color: '#1A1A1A' }}>the Power of Big Data</Typography>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 600, color: '#6B7280', fontSize: '1rem', mr: 0.5 }}>4.5</Typography>
                        <Typography sx={{ color: '#BEFF00', fontSize: '1.2rem' }}>★</Typography>
                     </Box>
                  </Box>
                  <Typography variant="caption" sx={{ color: '#6B7280', mb: 2, display: 'block' }}>by <span style={{ color: '#0647F9' }}>purepearl studio</span></Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                     <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F3F4F6', px: 1.5, py: 0.5, borderRadius: '100px', mr: 2 }}>
                        <Box component="span" sx={{ mr: 0.5, display: 'flex' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11H11M3 6V9M6 3V9M9 1V9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#1A1A1A' }}>Beginner</Typography>
                     </Box>
                     <Box sx={{ display: 'flex' }}>
                       <Avatar sx={{ width: 24, height: 24, border: '2px solid white' }} src="/assets/review/reviewer-1.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-2.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-3.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-2.png" />
                       <Avatar sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-1.png" />
                       <Box sx={{ width: 24, height: 24, ml: -1, borderRadius: '50%', bgcolor: '#000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, border: '2px solid white' }}>26+</Box>
                     </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 800, color: '#0647F9', fontSize: '1.25rem' }}>$25<Typography component="span" sx={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: 500 }}>/lifetime</Typography></Typography>
                  </Box>
               </Paper>

               {/* Yellow Donut */}
               <Box component="img" src="/assets/auth/auth-page-donut.svg" sx={{ position: 'absolute', top: -3, left: 60, width: 146, height: 146, zIndex: 5 }} />
               
               {/* Zigzag */}
               <Box component="img" src="/assets/auth/auth-page-zigzag.svg" sx={{ position: 'absolute', top: 340, left: 430, width: 175, height: 175, zIndex: 6 }} />
               
               {/* Lime Box (Happy Students) */}
               <Paper sx={{ position: 'absolute', top: 462, right: 172, bgcolor: '#BEFF00', width: 250, p: 2, borderRadius: '16px', zIndex: 3, boxShadow: 'none' }}>
                  <Typography sx={{ fontWeight: 700, color: '#000', fontSize: '1rem' }}>Happy Students</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
                     <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>4.5</Typography>
                     <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 500 }}>(240)</Typography>
                     <Typography sx={{ color: '#0647F9', ml: 0.5, fontSize: '12px' }}>★</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 1 }}>
                       <Avatar sx={{ width: 28, height: 28, border: '2px solid white' }} src="/assets/review/reviewer-1.png" />
                       <Avatar sx={{ width: 28, height: 28, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-2.png" />
                       <Avatar sx={{ width: 28, height: 28, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-3.png" />
                       <Avatar sx={{ width: 28, height: 28, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-2.png" />
                       <Avatar sx={{ width: 28, height: 28, ml: -1, border: '2px solid white' }} src="/assets/review/reviewer-1.png" />
                       <Box sx={{ width: 28, height: 28, ml: -1, borderRadius: '50%', bgcolor: '#000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, border: '2px solid white' }}>2K+</Box>
                  </Box>
               </Paper>
               
               {/* Lime Cone */}
               <Box component="img" src="/assets/auth/auth-page-lame-cone.svg" sx={{ position: 'absolute', top: 400, left: 32, width: 188, height: 188, zIndex: 6 }} />
            </Box>
          </Grid>
          
          {/* Right Side - Form */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: { xs: 4, md: 4 } }}>
            <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, width: '100%', maxWidth: 540, borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Typography sx={{ color: '#0647F9', fontSize: '1rem', mb: 1.5, fontWeight: 500 }}>
                Create an Account
              </Typography>
              <Typography variant="h3" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 800, color: '#1A1A1A', mb: 6, lineHeight: 1.2 }}>
                Welcome to<br/>ByteSpace
              </Typography>
              
              <Box component="form" onSubmit={handleSignup} sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#4B5563', mb: 1 }}>Full Name</Typography>
                  <TextField 
                    fullWidth 
                    placeholder="Jamie Davis" 
                    required 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    sx={{ 
                      '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'transparent', '& fieldset': { borderColor: '#E5E7EB' } }
                    }}
                  />
                </Box>
                
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#4B5563', mb: 1 }}>Email</Typography>
                  <TextField 
                    fullWidth 
                    placeholder="designer@example.com" 
                    type="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    sx={{ 
                      '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'transparent', '& fieldset': { borderColor: '#E5E7EB' } }
                    }}
                  />
                </Box>
                
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#4B5563', mb: 1 }}>Password</Typography>
                  <TextField
                    fullWidth
                    placeholder="********"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ 
                      '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'transparent', '& fieldset': { borderColor: '#E5E7EB' } }
                    }}
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
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{ 
                      bgcolor: '#BEFF00', 
                      color: '#000', 
                      fontWeight: 600, 
                      borderRadius: '100px',
                      px: 5,
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: 'none',
                      '&:hover': { bgcolor: '#a6e600', boxShadow: 'none' } 
                    }}
                  >
                    Continue
                  </Button>
                </Box>
              </Box>
              
              <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: '#6B7280' }}>
                  Already have an account? <Link to="/login" style={{ color: '#0647F9', textDecoration: 'none', fontWeight: 500 }}>Login</Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default SignupPage;
