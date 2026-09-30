import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export const CtaSection: React.FC = () => {
  return (
    <Box sx={{ 
      bgcolor: '#0B3EE3', // Vibrant blue background
      py: { xs: 12, md: 16 }, 
      position: 'relative', 
      overflow: 'hidden',
      // Grid Pattern
      backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '100px 100px',
      backgroundPosition: 'center center'
    }}>
      
      {/* Decorative SVG Assets */}
      
      {/* Top Left Lime Zigzag */}
      <Box 
        component="img" 
        src="/assets/cta/cta-top-left-lame-zigzag.svg" 
        sx={{ position: 'absolute', top: '0%', left: '0%', width: { xs: 200, md: 350 }, zIndex: 1 }} 
        alt=""
      />
      
      {/* Middle Left White Zigzag (Beside Title) */}
      <Box 
        component="img" 
        src="/assets/cta/cta-left -title-white-zigzag.svg" 
        sx={{ position: 'absolute', top: '20%', left: '15%', width: { xs: 100, md: 160 }, zIndex: 1 }} 
        alt=""
      />
      
      {/* Left Middle White Cone */}
      <Box 
        component="img" 
        src="/assets/cta/left middle-white-cone.svg" 
        sx={{ position: 'absolute', bottom: '0%', left: '0%', width: { xs: 180, md: 280 }, zIndex: 1 }} 
        alt=""
      />
      
      {/* Bottom Left Donut */}
      <Box 
        component="img" 
        src="/assets/cta/left bottom lame donut.svg" 
        sx={{ position: 'absolute', bottom: '0%', left: '11%', width: { xs: 200, md: 400 }, zIndex: 1 }} 
        alt=""
      />

      {/* Top Right Lame Cone (Beside Title) */}
      <Box 
        component="img" 
        src="/assets/cta/cta-right-title-lame-cone.svg" 
        sx={{ position: 'absolute', top: '4%', right: '16%', width: { xs: 120, md: 200 }, zIndex: 1 }} 
        alt=""
      />
      
      {/* Right Middle Big White Cone */}
      <Box 
        component="img" 
        src="/assets/cta/right-middle-white-cone.svg" 
        sx={{ position: 'absolute', top: '-3%', right: '0%', width: { xs: 200, md: 320 }, zIndex: 1 }} 
        alt=""
      />
      
      {/* Bottom Right Lime Zigzag */}
      <Box 
        component="img" 
        src="/assets/cta/right bottom lame zigzag.svg" 
        sx={{ position: 'absolute', bottom: '0%', right: '4%', width: { xs: 180, md: 350 }, zIndex: 1 }} 
        alt=""
      />
      
      {/* Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2, fontFamily: 'Clash Display, sans-serif' }}>
          Unlock Your Potential as a<br/>Creator with ByteSpace
        </Typography>
        
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.8, maxWidth: 850, fontFamily: 'Satoshi, sans-serif' }}>
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </Typography>
        
        <Button
          sx={{
            mt: 2,
            px: 6,
            py: 2,
            bgcolor: '#CBFC01',
            borderRadius: '50px',
            fontWeight: 700,
            color: '#040819',
            fontSize: '1.125rem',
            textTransform: 'none',
            fontFamily: 'Satoshi, sans-serif',
            boxShadow: '0px 10px 25px rgba(203, 252, 1, 0.3)',
            '&:hover': { bgcolor: '#b5e001', boxShadow: '0px 15px 30px rgba(203, 252, 1, 0.4)' },
          }}
        >
          Join as Creator
        </Button>
      </Container>
    </Box>
  );
};
