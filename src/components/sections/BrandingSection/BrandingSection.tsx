import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';

const brands = [
  { id: 1, icon: '/assets/branding/icon-1.svg', text: 'Logoipsum' },
  { id: 2, icon: '/assets/branding/icon-2.svg', text: 'Logoipsum' },
  { id: 3, icon: '/assets/branding/icon-3.svg', text: 'Logoipsum' },
  { id: 4, icon: '/assets/branding/icon-4.svg', text: 'Logoipsum' },
  { id: 5, icon: '/assets/branding/icon-5.svg', text: 'Logoipsum' },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const BrandingSection: React.FC = () => {
  // Duplicate brands array multiple times to ensure enough items for a seamless loop on wide screens
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <Box sx={{ bgcolor: '#F8F9FA', py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${scroll} 30s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          }
        }}
      >
        {marqueeItems.map((brand, index) => (
          <Box 
            key={`${brand.id}-${index}`} 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              mx: { xs: 4, md: 6 } 
            }}
          >
            <Box
              component="img"
              src={brand.icon}
              alt={brand.text}
              sx={{ width: 40, height: 40, objectFit: 'contain' }}
            />
            <Typography
              sx={{
                fontWeight: 800,
                color: '#82868E', // Match the SVG fill color
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              {brand.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandingSection;
