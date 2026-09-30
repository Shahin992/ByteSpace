import React from 'react';
import { Box, Typography, Avatar, AvatarGroup, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const GrowthSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 12, md: 16 }, position: 'relative' }}>
      
      {/* Background Ellipses */}
      <Box 
        component="img" 
        src="/assets/professional-growth/man-side left-top-ellipse.svg" 
        sx={{ position: 'absolute', top: 0, left: 0, width: '40%', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }} 
        alt=""
      />
      <Box 
        component="img" 
        src="/assets/professional-growth/women-side-bottom-ellipse.svg" 
        sx={{ position: 'absolute', bottom: 0, left: 0, width: '40%', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }} 
        alt=""
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', mb: { xs: 20, md: 32 } }}>
          
          {/* Left Content */}
          <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h2" sx={{ color: '#040819', fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2, letterSpacing: '-0.02em', fontFamily: 'Clash Display, sans-serif' }}>
              Your Path to Professional<br />Growth Starts Here!
            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.7, fontFamily: 'Satoshi, sans-serif', maxWidth: 450 }}>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: { xs: 5, md: 7 }, mt: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '2.5rem', color: '#1B51E5', lineHeight: 1, fontFamily: 'Clash Display, sans-serif' }}>12K</Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '0.95rem' }}>Students</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '2.5rem', color: '#1B51E5', lineHeight: 1, fontFamily: 'Clash Display, sans-serif' }}>70+</Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '0.95rem' }}>Courses</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '2.5rem', color: '#1B51E5', lineHeight: 1, fontFamily: 'Clash Display, sans-serif' }}>16</Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '0.95rem' }}>Creators</Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Image Composite */}
          <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            <Box sx={{ position: 'relative', width: '100%', maxWidth: 550, height: { xs: 450, md: 550 } }}>
              
              {/* Course Card Behind Man */}
              <Box 
                component="img"
                src="/assets/professional-growth/professional-growth-coursecard-behind man.png"
                sx={{ 
                  position: 'absolute', 
                  bottom: '5%', 
                  left: '-10%', 
                  height: '80%', 
                  zIndex: 1,
                  filter: 'drop-shadow(0px 15px 30px rgba(0,0,0,0.08))'
                }}
                alt="Course Card"
              />

              {/* Main Man Image */}
              <Box 
                component="img"
                src="/assets/professional-growth/professional-growth-man.png"
                sx={{ 
                  position: 'absolute', 
                  bottom: '-24%', 
                  left: '-3%', 
                  height: '100%', 
                  zIndex: 2, 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0px 25px 40px rgba(0,0,0,0.15))'
                }}
                alt="Student"
              />

              {/* Floating UI: Learning Progress */}
              <Box sx={{ 
                position: 'absolute', 
                top: '25%', 
                right: '0%', 
                bgcolor: 'white', 
                padding: '16px', 
                borderRadius: '16px', 
                boxShadow: '0px 25px 50px rgba(0,0,0,0.1)', 
                zIndex: 4, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px', 
                width: 232,
                height: 138
              }}>
                <Typography sx={{ fontSize: '1rem', color: '#4F4F4F', fontWeight: 500, lineHeight: 1.2 }}>Learning Progress</Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '3.5rem', color: '#040819', lineHeight: 1, fontFamily: 'Clash Display, sans-serif' }}>55%</Typography>
                <Box sx={{ width: '100%', bgcolor: '#F3F4F6', height: '8px', minHeight: '8px', borderRadius: '4px', overflow: 'hidden', mt: 'auto', flexShrink: 0 }}>
                  <Box sx={{ bgcolor: '#CBFC01', width: '55%', height: '100%', borderRadius: '4px' }} />
                </Box>
              </Box>

              {/* Zigzag (On top of Learning Progress) */}
              <Box 
                component="img"
                src="/assets/professional-growth/professional-growth-man-side-zigzag.svg"
                sx={{ 
                  position: 'absolute', 
                  top: '12%', 
                  right: '-5%', 
                  width: '28%', 
                  zIndex: 7 
                }}
                alt="Zigzag"
              />

            </Box>
          </Box>
        </Box>


        {/* Bottom Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left Image Composite */}
          <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            <Box sx={{ position: 'relative', width: '100%', maxWidth: 550, height: { xs: 450, md: 550 } }}>
              
              {/* Zigzag */}
              <Box 
                component="img"
                src="/assets/professional-growth/professiona-growth-women-side-zigzag.svg"
                sx={{ 
                  position: 'absolute', 
                  top: '-11%', 
                  right: '3%', 
                  width: '40%', 
                  zIndex: 3 
                }}
                alt="Zigzag"
              />

              {/* Main Woman Image */}
              <Box 
                component="img"
                src="/assets/professional-growth/professional-growth-woman.png"
                sx={{ 
                  position: 'absolute', 
                  bottom: '-5%', 
                  left: '5%', 
                  width: '110%', 
                  height: 'auto', 
                  zIndex: 2, 
                  filter: 'drop-shadow(0px 25px 40px rgba(0,0,0,0.15))'
                }}
                alt="Creator"
              />

              {/* Floating UI: Total Revenue */}
              <Box sx={{ 
                position: 'absolute', 
                top: '-22%', 
                left: '8%', 
                bgcolor: '#1B51E5', 
                color: 'white', 
                p: '16px', 
                borderRadius: '16px', 
                boxShadow: '0px 20px 40px rgba(27,81,229,0.3)', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1, 
                width: 213,
                height: 110
              }}>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Total Revenue</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', mt: -1 }}>July 1-28</Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', mt: 0.5, fontFamily: 'Clash Display, sans-serif', lineHeight: 1 }}>$120.29</Typography>
                <Box sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.2)', height: 6, borderRadius: 4, overflow: 'hidden', mt: 'auto', flexShrink: 0 }}>
                  <Box sx={{ bgcolor: '#CBFC01', width: '65%', height: '100%', borderRadius: 4 }} />
                </Box>
              </Box>

              {/* Floating UI: Year to Date */}
              <Box sx={{ 
                position: 'absolute', 
                top: '4%', 
                left: '8%', 
                bgcolor: '#1B51E5', 
                color: 'white', 
                p: '16px', 
                borderRadius: '16px', 
                boxShadow: '0px 20px 40px rgba(27,81,229,0.3)', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1, 
                width: 190,
                height: 115
              }}>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Year to Date</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', mt: -1 }}>2023</Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', mt: 0.5, fontFamily: 'Clash Display, sans-serif', lineHeight: 1 }}>$1,200.38</Typography>
                <Box sx={{ bgcolor: '#CBFC01', color: '#040819', px: 1.5, py: 0.5, borderRadius: '50px', alignSelf: 'flex-start', fontSize: '0.75rem', fontWeight: 700, mt: 'auto' }}>
                  +12$
                </Box>
              </Box>

              {/* Floating UI: Happy Students */}
              <Box sx={{ 
                position: 'absolute', 
                bottom: '12%', 
                right: '-5%', 
                bgcolor: 'white', 
                padding: '16px', 
                borderRadius: '16px', 
                boxShadow: '0px 25px 50px rgba(0,0,0,0.1)', 
                zIndex: 4, 
                display: 'flex', 
                flexDirection: 'column',
                gap: '8px', 
                width: 240,
                height: 120
              }}>
                <Typography sx={{ fontWeight: 700, color: '#040819', fontSize: '0.95rem' }}>Happy Students</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: -0.5 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#040819', lineHeight: 1 }}>4.5</Typography>
                  <Typography sx={{ color: '#82868E', fontSize: '0.85rem' }}>(240)</Typography>
                  <Typography sx={{ color: '#F59E0B', fontSize: '1.1rem', ml: 0.5, lineHeight: 1 }}>★</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                  <AvatarGroup max={6} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '0.75rem', borderColor: 'white', borderWidth: 2 } }}>
                    <Avatar src="https://i.pravatar.cc/100?img=1" />
                    <Avatar src="https://i.pravatar.cc/100?img=2" />
                    <Avatar src="https://i.pravatar.cc/100?img=3" />
                    <Avatar src="https://i.pravatar.cc/100?img=4" />
                    <Avatar src="https://i.pravatar.cc/100?img=5" />
                    <Avatar sx={{ bgcolor: '#CBFC01', color: '#040819', fontWeight: 700 }}>2K+</Avatar>
                  </AvatarGroup>
                </Box>
              </Box>

            </Box>
          </Box>

          {/* Right Content */}
          <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex', flexDirection: 'column', gap: 3, pl: { md: 4 } }}>
            <Typography variant="h2" sx={{ color: '#040819', fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2, letterSpacing: '-0.02em', fontFamily: 'Clash Display, sans-serif' }}>
              Create & Manage<br />Courses Easily.
            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.7, fontFamily: 'Satoshi, sans-serif', maxWidth: 450 }}>
              <span style={{ fontWeight: 700, color: '#040819' }}>ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              {[
                'Share Your Expertise', 
                'Monetize Your Passion', 
                'Flexibility and Autonomy', 
                'Build a Community'
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleIcon sx={{ color: '#1B51E5', fontSize: 24 }} />
                  <Typography sx={{ fontWeight: 600, color: '#040819', fontSize: '1.05rem' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};
