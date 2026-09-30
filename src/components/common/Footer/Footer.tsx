import React from 'react';
import { Box, Typography, Link, InputBase, Button } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'white', pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, px: { xs: 3, md: 6, lg: 12 }, borderTop: '1px solid #E5E6E8' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 10 } }}>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: { xs: 6, md: 12 } }}>
          
          {/* Left Column: Brand & Newsletter */}
          <Box sx={{ width: { xs: '100%', lg: '40%' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src="/assets/branding/footer-logo.svg" sx={{ height: 32, objectFit: 'contain' }} alt="ByteSpace" />
            </Box>
            <Typography sx={{ color: '#4F4F4F', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 400 }}>
              Stay Up to date with our latest features and releases by joining our newsletter.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
              <Box sx={{ display: 'flex', width: '100%', maxWidth: 450 }}>
                <InputBase 
                  placeholder="Enter your email" 
                  sx={{ 
                    flex: 1, 
                    px: 2.5, 
                    py: 1.25, 
                    border: '1px solid #E5E6E8', 
                    borderRight: 'none', 
                    borderTopLeftRadius: 50, 
                    borderBottomLeftRadius: 50, 
                    fontSize: '0.9rem',
                    color: '#4F4F4F',
                    '&.Mui-focused': { borderColor: '#CBFC01', outline: 'none' } 
                  }}
                />
                <Button 
                  sx={{ 
                    px: 4, 
                    py: 1.25, 
                    bgcolor: '#CBFC01', 
                    color: '#040819', 
                    fontWeight: 600, 
                    borderTopRightRadius: 50, 
                    borderBottomRightRadius: 50, 
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    boxShadow: 'none',
                    '&:hover': { bgcolor: '#b5e001', boxShadow: 'none' }
                  }}
                >
                  Search
                </Button>
              </Box>
              <Typography sx={{ color: '#82868E', fontSize: '0.75rem', maxWidth: 400, mt: 1, lineHeight: 1.5 }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </Typography>
            </Box>
          </Box>

          {/* Right Columns: Links */}
          <Box sx={{ width: { xs: '100%', lg: '60%' }, display: 'flex', flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: 'space-between', gap: 4, pt: { lg: 1 } }}>
            
            {/* Column 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, flex: 1 }}>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Featured Courses</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Featured Categories</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Business</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>IT</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Design</Link>
            </Box>

            {/* Column 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, flex: 1 }}>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Development</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Marketing</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Photography</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Finance</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Sport</Link>
            </Box>

            {/* Column 3 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, flex: 1 }}>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Become a Creator</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Affiliate Program</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Contact</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>Help</Link>
              <Link href="#" underline="none" sx={{ color: '#4F4F4F', fontSize: '0.9rem', '&:hover': { color: '#040819' } }}>About</Link>
            </Box>

          </Box>
        </Box>

        {/* Bottom Row */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ width: '100%', height: '1px', bgcolor: '#EAEAEA' }} />
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ color: '#82868E', fontSize: '0.85rem' }}>
              @ 2023 ByteSpace. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Link href="#" underline="none" sx={{ color: '#82868E', fontSize: '0.85rem', '&:hover': { color: '#040819' } }}>Privacy Policy</Link>
              <Link href="#" underline="none" sx={{ color: '#82868E', fontSize: '0.85rem', '&:hover': { color: '#040819' } }}>Terms of Service</Link>
              <Link href="#" underline="none" sx={{ color: '#82868E', fontSize: '0.85rem', '&:hover': { color: '#040819' } }}>Cookies Settings</Link>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;
