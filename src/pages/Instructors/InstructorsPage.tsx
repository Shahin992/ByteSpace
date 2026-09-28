import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import InstructorCard from '../../components/cards/InstructorCard/InstructorCard';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { instructors } from '../../data/instructors';

const InstructorsPage: React.FC = () => {
  return (
    <Box sx={{ pt: 12, pb: 10, bgcolor: '#F8F9FF', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <SectionTitle
          badge="Expert Instructors"
          title="Learn from the"
          titleHighlight="Best"
          subtitle="Our instructors are industry professionals who are passionate about sharing their knowledge."
        />
        <Grid container spacing={3}>
          {instructors.map((instructor) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={instructor.id}>
              <InstructorCard instructor={instructor} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InstructorsPage;
