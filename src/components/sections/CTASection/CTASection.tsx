import React from 'react';
import { Box, Container, Grid, Typography, Button, Avatar, AvatarGroup } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#F8F9FF',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: '#050505',
            borderRadius: 6,
            p: { xs: 5, md: 8 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative */}
          <Box sx={{ position: 'absolute', top: -30, right: -30, width: 180, height: 180, borderRadius: '50%', bgcolor: 'rgba(190,255,0,0.08)' }} />
          <Box sx={{ position: 'absolute', bottom: -40, left: '40%', width: 140, height: 140, borderRadius: '50%', bgcolor: 'rgba(25,25,252,0.2)' }} />

          <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{ color: '#BEFF00', fontWeight: 700, letterSpacing: '0.1em', display: 'block', mb: 1 }}
              >
                Start Today
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontWeight: 900,  color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}
              >
                Ready to Start Your{' '}
                <Box component="span" sx={{ color: '#BEFF00' }}>Learning Journey?</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', mb: 4, lineHeight: 1.8 }}>
                Join over 500,000 students already learning on ByteSpace. Get unlimited access to
                800+ courses and advance your career today.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  size="large"
                  sx={{
                    bgcolor: '#BEFF00',
                    color: '#050505',
                    fontWeight: 800,
                    px: 4,
                    '&:hover': { bgcolor: '#CCFF00' },
                  }}
                >
                  Get Started Free
                </Button>
                <Button
                  component={Link}
                  to="/courses"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: '#fff',
                    fontWeight: 600,
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.06)' },
                  }}
                >
                  Browse Courses
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                <AvatarGroup
                  max={5}
                  sx={{
                    justifyContent: { xs: 'flex-start', md: 'center' },
                    mb: 2,
                    '& .MuiAvatar-root': { width: 52, height: 52, border: '3px solid #050505' },
                  }}
                >
                  {[
                    'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
                  ].map((src, i) => (
                    <Avatar key={i} src={src} />
                  ))}
                </AvatarGroup>
                <Typography variant="h5" sx={{ fontWeight: 900,  color: '#BEFF00' }}>500,000+</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                  students already enrolled
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
