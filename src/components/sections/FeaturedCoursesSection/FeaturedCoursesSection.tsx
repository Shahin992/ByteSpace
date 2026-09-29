// @ts-nocheck
import React, { useState } from 'react';
import { Box, Container, Grid, Tabs, Tab, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CourseCard from '../../cards/CourseCard/CourseCard';
import { courses } from '../../../data/courses';
import { Link } from 'react-router-dom';

const tabs = ['All', 'Most Popular', 'Trending', 'New'];

const FeaturedCoursesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = courses.filter((c) => {
    if (activeTab === 0) return true;
    if (activeTab === 1) return c.tag === 'Popular' || c.tag === 'Best Seller';
    if (activeTab === 2) return c.tag === 'Trending';
    if (activeTab === 3) return c.tag === 'New';
    return true;
  });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FF' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 5, flexWrap: 'wrap', gap: 2 }}>
          <SectionTitle
            badge="Featured Courses"
            title="Explore Our"
            titleHighlight="Top Courses"
            subtitle="Find the perfect course to develop your skills and launch your career."
            align="left"
            sx={{ mb: 0 }}
          />
          <Button
            component={Link}
            to="/courses"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 700, color: 'primary.main', whiteSpace: 'nowrap' }}
          >
            Browse All Courses
          </Button>
        </Box>

        <Tabs
          value={activeTab}
          onChange={(_, v) => setActiveTab(v)}
          sx={{
            mb: 5,
            '& .MuiTabs-indicator': { height: 3, borderRadius: 2, bgcolor: 'primary.main' },
            '& .MuiTab-root': { fontWeight: 600, textTransform: 'none', fontSize: '0.95rem' },
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))}
        </Tabs>

        <Grid container spacing={3}>
          {(filtered.length > 0 ? filtered : courses).slice(0, 6).map((course) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCoursesSection;
