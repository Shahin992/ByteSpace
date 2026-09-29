// @ts-nocheck
import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Rating, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'UI Designer @ Google',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: 'ByteSpace completely transformed my career. The UI/UX course was incredibly detailed and practical. I landed my dream job within 3 months of completing it!',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 5,
    text: "The React & TypeScript course is simply the best I've taken. Clear explanations, real-world projects, and an amazing instructor. Highly recommended!",
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Data Scientist @ Netflix',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'I went from zero to landing a data science role at Netflix in 6 months. The ML course was comprehensive and kept me engaged throughout. Worth every penny!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <SectionTitle
          badge="Student Reviews"
          title="What Our"
          titleHighlight="Students Say"
          subtitle="Join thousands of satisfied learners who have transformed their careers with ByteSpace."
        />
        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid size={{ xs: 12, md: 4 }} key={t.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: '1.5px solid',
                  borderColor: 'divider',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 12px 40px rgba(25,25,252,0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main', opacity: 0.3, mb: 1 }} />
                <Rating value={t.rating} readOnly size="small" sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary', fontStyle: 'italic' }}>
                  "{t.text}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={t.avatar} sx={{ width: 46, height: 46 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{t.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{t.role}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
