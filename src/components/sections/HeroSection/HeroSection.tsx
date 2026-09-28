import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  InputAdornment,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppStore';
import { setSearchQuery, setSelectedCategory } from '../../../store/slices/coursesSlice';

const stats = [
  { value: '500K+', label: 'Active Students' },
  { value: '800+', label: 'Total Courses' },
  { value: '200+', label: 'Expert Instructors' },
];

const benefits = [
  'Learn from world-class instructors',
  'Earn recognized certificates',
  'Flexible learning schedule',
];

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
    dispatch(setSelectedCategory(category));
    navigate('/courses');
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0D0DFF 0%, #1919FC 40%, #0000CC 100%)',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Decorative Shapes */}
      <Box sx={{
        position: 'absolute', top: '10%', right: '5%', width: { xs: 80, md: 140 },
        height: { xs: 80, md: 140 }, borderRadius: '50%',
        background: 'rgba(190,255,0,0.15)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(190,255,0,0.3)',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '15%', left: '3%', width: { xs: 60, md: 100 },
        height: { xs: 60, md: 100 }, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
      }} />
      <Box sx={{
        position: 'absolute', top: '30%', left: '8%', width: 60, height: 60,
        borderRadius: 3, background: '#BEFF00', opacity: 0.9, transform: 'rotate(20deg)',
        display: { xs: 'none', lg: 'block' },
      }} />
      <Box sx={{
        position: 'absolute', bottom: '25%', right: '10%', width: 80, height: 80,
        borderRadius: '50%', border: '3px solid rgba(190,255,0,0.4)',
        display: { xs: 'none', md: 'block' },
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(190,255,0,0.15)',
                border: '1px solid rgba(190,255,0,0.3)',
                px: 2.5,
                py: 0.8,
                borderRadius: 50,
                mb: 3,
              }}
            >
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#BEFF00', animation: 'pulse 2s infinite' }} />
              <Typography variant="caption" sx={{ color: '#BEFF00', fontWeight: 700, letterSpacing: '0.05em' }}>
                🎓 #1 Online Learning Platform
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              }}
            >
              Get Access to{' '}
              <Box
                component="span"
                sx={{
                  color: '#BEFF00',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -6,
                    left: 0,
                    right: 0,
                    height: 4,
                    bgcolor: '#BEFF00',
                    borderRadius: 2,
                    opacity: 0.5,
                  },
                }}
              >
                Hundreds
              </Box>{' '}
              Courses Available
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.75)', mb: 3.5, lineHeight: 1.8, maxWidth: 480 }}
            >
              Expand your knowledge, develop new skills, and advance your career with our expert-led
              online courses. Join 500,000+ learners worldwide.
            </Typography>

            {/* Benefits */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
              {benefits.map((b) => (
                <Box key={b} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#BEFF00' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>{b}</Typography>
                </Box>
              ))}
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: 'flex',
                gap: 0,
                bgcolor: '#fff',
                borderRadius: 3,
                p: 1,
                mb: 5,
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 0 },
              }}
            >
              <FormControl size="small" sx={{ minWidth: 130, '& fieldset': { border: 'none' } }}>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ fontWeight: 600, fontSize: '0.875rem' }}
                >
                  {['All', 'Design', 'Development', 'Marketing', 'Photography', 'Business'].map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ width: 1, bgcolor: 'divider', display: { xs: 'none', sm: 'block' }, my: 0.5 }} />
              <TextField
                placeholder="Search for courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ '& fieldset': { border: 'none' }, '& input': { fontWeight: 500 } }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  bgcolor: 'primary.main',
                }}
              >
                Search
              </Button>
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexWrap: 'wrap' }}>
              {stats.map((stat, i) => (
                <Box key={i}>
                  <Typography variant="h4" sx={{ fontWeight: 900,  color: '#BEFF00', lineHeight: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.65)' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Image */}
          {!isMobile && (
            <Grid size={{ md: 6 }}>
              <Box sx={{ position: 'relative' }}>
                {/* Main hero image */}
                <Box
                  sx={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                    alt="Students learning online"
                    sx={{ width: '100%', display: 'block', maxHeight: 450, objectFit: 'cover' }}
                  />
                  {/* Overlay gradient */}
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                </Box>

                {/* Floating card — enrolled */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    left: -30,
                    bgcolor: '#fff',
                    borderRadius: 3,
                    p: 2,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PlayArrowRoundedIcon sx={{ color: '#fff', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Total Enrolled</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>48,000+ Students</Typography>
                  </Box>
                </Box>

                {/* Floating card — discount */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: -20,
                    bgcolor: '#BEFF00',
                    borderRadius: 3,
                    p: 2,
                    boxShadow: '0 12px 40px rgba(190,255,0,0.35)',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 900,  lineHeight: 1, color: '#050505' }}>55%</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700,  color: '#050505' }}>Off Today!</Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
