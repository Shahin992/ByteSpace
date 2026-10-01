// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  InputBase,
  Button,
  InputAdornment,
  Avatar,
  AvatarGroup,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppStore';
import { setSearchQuery } from '../../../store/slices/coursesSlice';

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
    navigate('/courses');
  };

  return (
    <Box
      sx={{
        // Match the deep blue background and subtle grid lines
        backgroundColor: '#0034FF',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.25) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.25) 2px, transparent 2px)
        `,
        backgroundSize: '140px 140px',
        backgroundRepeat: 'repeat',
        width: '100%',
        minHeight: { xs: '100vh', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden', // Critical: cleanly slice the circle, shapes, and person at the bottom edge
        pt: { xs: 16, md: 20 },
        pb: 0,
      }}
    >
        {/* 1. Top Left Lime Zigzag - Pinned to absolute screen edges */}
        <Box
          component="img"
          src="/assets/hero/left lame zigzag.svg"
          alt=""
          sx={{
            position: 'absolute', 
            top: { xs: 80, md: 150, lg: 160 }, 
            left: { xs: -20, md: -40, lg: -60 }, 
            width: { xs: 120, md: 250, lg: 380 }, 
            height: { xs: 120, md: 250, lg: 380 },
            objectFit: 'contain', zIndex: 0,
            display: 'block',
          }}
        />
        
        {/* 3. Top Right Lime Cone - Pinned to absolute screen edges */}
        <Box
          component="img"
          src="/assets/hero/Cone.svg"
          alt=""
          sx={{
            position: 'absolute', 
            top: { xs: '5%', lg: 130 }, 
            right: { xs: -20, md: -40, lg: -60 }, 
            width: { xs: 100, md: 220, lg: 320 }, 
            height: { xs: 140, md: 300, lg: 450 },
            objectFit: 'contain', zIndex: 0,
            display: 'block',
          }}
        />

        {/* Center-anchored Background Shapes Wrapper (Caps width at 1440px to prevent center elements from drifting on ultra-wide screens) */}
        <Box sx={{
          position: 'absolute',
          top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', maxWidth: 1440, height: '100%',
          pointerEvents: 'none', zIndex: 0
        }}>
          {/* 2. Bottom Left White Donut */}
          <Box
            component="img"
            src="/assets/hero/donut-shape.svg"
            alt=""
            sx={{
              position: 'absolute', 
              bottom: { xs: 10, md: 30, lg: 60 }, 
              left: { xs: -10, sm: 'calc(50% - 400px)', md: 'calc(50% - 520px)', lg: 'calc(50% - 710px)' }, 
              width: { xs: 100, md: 200, lg: 300 }, 
              height: { xs: 100, md: 200, lg: 300 },
              objectFit: 'contain', 
              zIndex: 20,
              display: 'block',
            }}
          />
          
          {/* 4. Bottom Right White Zigzag (Thick) */}
          <Box
            component="img"
            src="/assets/hero/right white zigzag.svg"
            alt=""
            sx={{
              position: 'absolute', 
              bottom: { xs: -10, md: -30, lg: -50 }, 
              right: { xs: -10, sm: 'calc(50% - 400px)', md: 'calc(50% - 520px)', lg: 'calc(50% - 710px)' }, 
              width: { xs: 90, md: 200, lg: 320 }, 
              height: { xs: 100, md: 250, lg: 380 },
              objectFit: 'contain', 
              zIndex: 20,
              display: 'block',
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            color: '#fff',
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
            fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
            maxWidth: "100%",
          }}
        >
          Get Access to Hundreds<br />Courses Available
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ 
            color: 'rgba(255,255,255,0.8)', 
            mb: 5, 
            lineHeight: 1.6, 
            maxWidth: 700,
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </Typography>

        {/* --- Search Bar Wrapper --- */}
        <Box 
          sx={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: 650, 
            display: 'flex', 
            justifyContent: 'center',
            mb: { xs: 8, md: 8 }
          }}
        >
          {/* Middle Left White Zigzag (Small) */}
          <Box
            component="img"
            src="/assets/hero/left white zigzag.svg"
            alt=""
            sx={{
              position: 'absolute', 
              top: '60%', 
              left: { xs: -20, md: -90, lg: -120 }, 
              width: { xs: 60, md: 100, lg: 120 }, 
              height: { xs: 60, md: 100, lg: 120 },
              objectFit: 'contain', 
              zIndex: 0,
            }}
          />

          {/* Middle Right White Cone */}
          <Box
            component="img"
            src="/assets/hero/white Cone.svg"
            alt=""
            sx={{
              position: 'absolute', 
              top: '55%', 
              right: { xs: -20, md: -90, lg: -120 }, 
              width: { xs: 60, md: 110, lg: 130 }, 
              height: { xs: 60, md: 110, lg: 130 },
              objectFit: 'contain', 
              zIndex: 0,
            }}
          />

          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#fff',
              borderRadius: 50,
              p: 0.75,
              pl: 3,
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1, // Stay above the small floating shapes
            }}
          >
            <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder="Course, topic, creator"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              fullWidth
              sx={{ ml: 1, flex: 1, fontWeight: 500, fontSize: { xs: '0.85rem', sm: '1rem' } }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                borderRadius: 50,
                px: { xs: 2.5, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontWeight: 700,
                bgcolor: '#BEFF00',
                color: '#050505',
                textTransform: 'none',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  bgcolor: '#A3D900',
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>

        {/* --- Center Image Composition --- */}
        <Box sx={{ 
          position: 'relative', 
          width: { xs: '100%', sm: 550, md: 750, lg: 850 }, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-end',
          mt: 'auto',
          zIndex: 10,
        }}>
          
          {/* Large Lime Green Circle Backdrop */}
          <Box
            component="img"
            src="/assets/hero/hero-circle.svg"
            alt=""
            sx={{
              position: 'absolute',
              // Scale the SVG to be wider than the person, reaching the floating cards
              width: { xs: '150%', sm: '140%', md: '130%', lg: '135%' },
              height: 'auto',
              bottom: 0,
              // Center the oversized absolute element perfectly
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
          />

          {/* Person Image */}
          <Box 
            component="img" 
            src="/assets/hero/hero-person.png" 
            alt="Student"
            sx={{ 
              width: { xs: '85%', md: '80%', lg: '75%' }, 
              height: 'auto',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              // Sit flush on the bottom baseline of the HeroSection
              mb: -1 
            }}
          />

          {/* -- Floating Cards -- */}
          
          {/* Card 1: UI/UX Design */}
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              left: { xs: '5%', md: '2%' },
              bgcolor: '#fff',
              borderRadius: 4,
              p: 2,
              px: 3,
              minWidth: { xs: 150, md: 220 },
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              zIndex: 2,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#050505', mb: 0.5 }}>
              UI/UX Design
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              200 Courses • 1000+ Students
            </Typography>
          </Box>

          {/* Card 2: Happy Students */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '22%',
              left: { xs: '8%', md: '3%' },
              bgcolor: '#fff',
              borderRadius: 4,
              p: 2,
              px: 3,
              minWidth: { xs: 180, md: 250 },
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              zIndex: 2,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#050505' }}>
                Happy Students
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>4.5</Typography>
              <Typography variant="caption" color="text.secondary">(240)</Typography>
              <StarIcon sx={{ color: '#FFD700', fontSize: 16 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AvatarGroup max={5} sx={{ '& .MuiAvatar-root': { width: 28, height: 28, fontSize: '0.75rem', borderColor: '#fff' } }}>
                <Avatar src="https://i.pravatar.cc/150?u=1" />
                <Avatar src="https://i.pravatar.cc/150?u=2" />
                <Avatar src="https://i.pravatar.cc/150?u=3" />
                <Avatar src="https://i.pravatar.cc/150?u=4" />
              </AvatarGroup>
              <Box sx={{ bgcolor: '#BEFF00', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="caption" sx={{ fontWeight: 800, color: '#050505', fontSize: '0.65rem' }}>2K+</Typography>
              </Box>
            </Box>
          </Box>

          {/* Card 3: Learning Progress */}
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              right: { xs: '5%', md: '2%' },
              bgcolor: '#fff',
              borderRadius: 4,
              p: 3,
              minWidth: { xs: 200, md: 260 },
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              zIndex: 2,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 1 }}>
              Learning Progress
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#050505', mb: 1.5 }}>
              55%
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={55} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: '#F0F0F0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#BEFF00',
                  borderRadius: 4,
                }
              }} 
            />
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
