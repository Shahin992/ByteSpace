// @ts-nocheck
import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import BlogCard from '../../components/cards/BlogCard/BlogCard';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { blogPosts } from '../../data/blog';

const BlogPage: React.FC = () => {
  return (
    <Box sx={{ pt: 12, pb: 10, bgcolor: '#F8F9FF', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <SectionTitle
          badge="Our Blog"
          title="Latest Insights &"
          titleHighlight="News"
          subtitle="Read the latest articles, tutorials, and industry updates from our expert team."
        />
        <Grid container spacing={3}>
          {blogPosts.map((post) => (
            <Grid size={{ xs: 12, md: 4 }} key={post.id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button variant="outlined" size="large" sx={{ fontWeight: 600 }}>Load More Articles</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
