import React, { useState } from 'react';
import { Box, Container, Typography, Chip, Grid } from '@mui/material';
import CourseCard from '../../cards/CourseCard/CourseCard';
import { courses } from '../../../data/courses';

const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking'
];

const DiscoverSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#040819',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
              mb: 3,
              fontFamily: 'Clash Display, sans-serif'
            }}
          >
            Discover Your Passion,<br/>Build Your Skills
          </Typography>
          <Typography
            sx={{
              color: '#4F4F4F',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              fontFamily: 'Satoshi, sans-serif'
            }}
          >
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </Typography>
        </Box>

        {/* Categories / Chips */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1.5, 
            justifyContent: 'center', 
            mb: 8,
            maxWidth: 1050,
            mx: 'auto'
          }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                bgcolor: cat === activeCategory ? '#D4FA37' : '#F3F4F6',
                color: cat === activeCategory ? '#000' : '#4B5563',
                fontWeight: cat === activeCategory ? 600 : 500,
                fontSize: '0.9rem',
                py: 2.5,
                px: 2,
                borderRadius: 8,
                border: 'none',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: '#D4FA37',
                  color: '#000',
                },
              }}
            />
          ))}
          <Chip
            label="+ More"
            clickable
            sx={{
              bgcolor: 'transparent',
              color: '#2563EB',
              fontWeight: 600,
              fontSize: '0.9rem',
              py: 2.5,
              px: 2,
              '&:hover': {
                bgcolor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          />
        </Box>

        {/* Course Cards Grid */}
        <Grid container spacing={3}>
          {courses.slice(0, 6).map((course) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DiscoverSection;
