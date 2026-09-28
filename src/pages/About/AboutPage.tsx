import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ pt: 12, pb: 10, bgcolor: '#fff', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
            Our Mission
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900,  my: 2 }}>
            Empowering the world to learn <span style={{ color: '#1919FC' }}>anything</span>, anytime.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            ByteSpace is the leading destination for online learning. We believe that everyone, everywhere, has the right to quality education. We partner with top instructors to bring you the best learning experience.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              sx={{ width: '100%', borderRadius: 4, height: 400, objectFit: 'cover' }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3,  fontWeight: 800 }} >We are changing the way people learn.</Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Founded in 2024, ByteSpace started with a simple idea: what if you could learn from the world's best experts directly from your living room?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Today, we have grown into a global community of millions of learners, thousands of instructors, and hundreds of companies who use ByteSpace to upskill their workforce. Our platform combines cutting-edge technology with high-quality content to deliver an unparalleled learning experience.
            </Typography>
          </Grid>
        </Grid>

        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide everything we do at ByteSpace."
        />
        <Grid container spacing={3}>
          {[
            { title: 'Learners First', text: 'Every decision we make starts with how it impacts our students.' },
            { title: 'Quality Content', text: 'We strictly vet all instructors to ensure only the highest quality courses.' },
            { title: 'Innovation', text: 'We constantly improve our platform to make learning more engaging.' },
          ].map((val) => (
            <Grid size={{ xs: 12, md: 4 }} key={val.title}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 2,  fontWeight: 700 }} >{val.title}</Typography>
                <Typography color="text.secondary">{val.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
