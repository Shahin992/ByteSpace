import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedIcon from '@mui/icons-material/Verified';

const stats = [
  { icon: SchoolIcon, value: '800+', label: 'Online Courses', color: '#1919FC' },
  { icon: EmojiEventsIcon, value: '98%', label: 'Success Rate', color: '#BEFF00', dark: true },
  { icon: PeopleAltIcon, value: '500K+', label: 'Happy Students', color: '#1919FC' },
  { icon: VerifiedIcon, value: '200+', label: 'Expert Instructors', color: '#1919FC' },
];

const StatsSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#050505', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const isLime = stat.color === '#BEFF00';
            return (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: isLime ? '#BEFF00' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isLime ? '#BEFF00' : 'rgba(255,255,255,0.08)'}`,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isLime
                        ? '0 12px 40px rgba(190,255,0,0.3)'
                        : '0 12px 40px rgba(25,25,252,0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      bgcolor: isLime ? '#050505' : 'rgba(25,25,252,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5,
                    }}
                  >
                    <Icon sx={{ color: isLime ? '#BEFF00' : '#1919FC', fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 900,  color: isLime ? '#050505' : '#fff', lineHeight: 1, mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: isLime ? '#333' : 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
