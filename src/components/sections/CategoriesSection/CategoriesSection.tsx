// @ts-nocheck
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CategoryCard from '../../cards/CategoryCard/CategoryCard';
import { categories } from '../../../data/categories';

const CategoriesSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <SectionTitle
          badge="Explore Topics"
          title="Browse Top"
          titleHighlight="Categories"
          subtitle="Choose from 1,000+ online video courses with new additions every month."
        />
        <Grid container spacing={3}>
          {categories.map((cat) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={cat.id}>
              <CategoryCard category={cat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesSection;
