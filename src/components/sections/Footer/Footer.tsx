import React from 'react';
import { Box, Typography, Link, InputBase, Button } from '@mui/material';
import { Layers } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'white', pt: { xs: 12, md: 24 }, pb: { xs: 6, md: 12 }, px: { xs: 3, md: 6, lg: 12 }, borderTop: '1px solid #E5E6E8' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 16 } }}>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: { xs: 6, md: 12 } }}>
          
          {/* Left Column: Brand & Newsletter */}
          <Box sx={{ width: { xs: '100%', lg: '33.333%' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 32, height: 32, bgcolor: '#040819', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBFC01' }}>
                <Layers size={18} />
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#040819' }}>ByteSpace</Typography>
            </Box>
            <Typography sx={{ color: '#4F4F4F', fontSize: '1rem', lineHeight: 1.6, maxWidth: 384 }}>
              Stay Up to date with our latest features and releases by joining our newsletter.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
              <Box sx={{ display: 'flex', width: '100%', maxWidth: 448 }}>
                <InputBase 
                  placeholder="Enter your email" 
                  sx={{ 
                    flex: 1, 
                    px: 2, 
                    py: 1.5, 
                    border: '1px solid #E5E6E8', 
                    borderRight: 'none', 
                    borderTopLeftRadius: 50, 
                    borderBottomLeftRadius: 50, 
                    fontSize: '0.875rem',
                    '&.Mui-focused': { borderColor: '#CBFC01', outline: 'none' } 
                  }}
                />
                <Button 
                  sx={{ 
                    px: 3, 
                    py: 1.5, 
                    bgcolor: '#CBFC01', 
                    color: '#040819', 
                    fontWeight: 600, 
                    borderTopRightRadius: 50, 
                    borderBottomRightRadius: 50, 
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#b5e001' }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography sx={{ color: '#82868E', fontSize: '0.75rem', maxWidth: 384 }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </Typography>
            </Box>
          </Box>

          {/* Right Columns: Links */}
          <Box sx={{ width: { xs: '100%', lg: '66.666%' }, display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, justifyContent: 'space-between', gap: 4, pl: { lg: 8 } }}>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ fontWeight: 600, color: '#040819', fontSize: '1.125rem' }}>Browse</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Featured Courses</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Featured Categories</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Business</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>IT</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Design</Link>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: { md: 5.5 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Development</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Marketing</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Photography</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Finance</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Sport</Link>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ fontWeight: 600, color: '#040819', fontSize: '1.125rem' }}>Platform</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Become a Creator</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Affiliate Program</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Contact</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>Help</Link>
                <Link href="#" underline="none" sx={{ color: '#4F4F4F', '&:hover': { color: '#CBFC01' } }}>About</Link>
              </Box>
            </Box>

          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ pt: 4, borderTop: '1px solid #E5E6E8', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ color: '#82868E', fontSize: '0.875rem' }}>
            @ 2023 ByteSpace. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.875rem', '&:hover': { color: '#040819' } }}>Privacy Policy</Link>
            <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.875rem', '&:hover': { color: '#040819' } }}>Terms of Service</Link>
            <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.875rem', '&:hover': { color: '#040819' } }}>Cookies Settings</Link>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};
