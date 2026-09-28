import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  Link,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link as RouterLink } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '#' },
    { label: 'Blog', to: '/blog' },
    { label: 'Press', to: '#' },
  ],
  Courses: [
    { label: 'All Courses', to: '/courses' },
    { label: 'Design', to: '/courses?category=Design' },
    { label: 'Development', to: '/courses?category=Development' },
    { label: 'Marketing', to: '/courses?category=Marketing' },
  ],
  Support: [
    { label: 'Help Center', to: '#' },
    { label: 'Contact Us', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
  ],
};

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#050505',
        color: 'white',
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SchoolIcon sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Byte<span style={{ color: '#BEFF00' }}>Space</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, mb: 3, maxWidth: 300 }}>
              Empowering learners worldwide with high-quality online courses. Learn at your own pace from expert instructors.
            </Typography>
            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.2s',
                    '&:hover': { color: '#BEFF00', bgcolor: 'rgba(190,255,0,0.1)', borderColor: '#BEFF00' },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={heading}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700,  mb: 2.5, color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}
              >
                {heading}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    component={RouterLink}
                    to={link.to}
                    underline="none"
                    sx={{
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#BEFF00' },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700,  mb: 2.5, color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', mb: 2, lineHeight: 1.7 }}>
              Get latest courses & updates straight to your inbox.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Your email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.06)',
                    borderRadius: 2,
                    color: '#fff',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(190,255,0,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: '#BEFF00' },
                    '& input::placeholder': { color: 'rgba(255,255,255,0.35)' },
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#BEFF00',
                  color: '#050505',
                  fontWeight: 700,
                  borderRadius: 2,
                  '&:hover': { bgcolor: '#CCFF00' },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2024 ByteSpace. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            Made with ❤️ for learners worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
