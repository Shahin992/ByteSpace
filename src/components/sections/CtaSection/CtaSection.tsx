import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const CtaSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#040819', py: { xs: 12, md: 24 }, px: { xs: 3, md: 6, lg: 12 }, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Elements Placeholder */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', opacity: 0.5, pointerEvents: 'none' }}>
        {/* Placeholder for 3D Cones and decorative elements */}
        <Box sx={{ position: 'absolute', top: 40, left: 40, width: 128, height: 128, background: 'linear-gradient(to top right, #7f30f7, #cbfc01)', borderRadius: '50%', filter: 'blur(64px)', opacity: 0.2 }} />
        <Box sx={{ position: 'absolute', bottom: 40, right: 40, width: 192, height: 192, background: 'linear-gradient(to bottom left, #7f30f7, #003be2)', borderRadius: '50%', filter: 'blur(64px)', opacity: 0.3 }} />
      </Box>

      <Box sx={{ maxWidth: 896, mx: 'auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, position: 'relative', zIndex: 10 }}>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2.25rem', md: '3rem', lg: '3.75rem' }, lineHeight: 1.2 }}>
          Unlock Your Potential as a Creator with ByteSpace
        </Typography>
        
        <Typography sx={{ color: '#D1D5DB', fontSize: { xs: '1.125rem', md: '1.25rem' }, lineHeight: 1.6, maxWidth: 768 }}>
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </Typography>
        
        <Button
          sx={{
            mt: 2,
            px: 4,
            py: 2,
            bgcolor: '#CBFC01',
            borderRadius: 50,
            fontWeight: 600,
            color: '#040819',
            fontSize: '1.125rem',
            textTransform: 'none',
            '&:hover': { bgcolor: '#b5e001' },
          }}
        >
          Join as Creator
        </Button>
      </Box>
    </Box>
  );
};
