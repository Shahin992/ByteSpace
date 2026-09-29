// @ts-nocheck
import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
  Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CourseCard from '../../components/cards/CourseCard/CourseCard';
import { courses } from '../../data/courses';
import { categories } from '../../data/categories';
import { useAppSelector, useAppDispatch } from '../../hooks/useAppStore';
import { setSearchQuery, setSelectedCategory, setSelectedLevel, setSortBy } from '../../store/slices/coursesSlice';

const ITEMS_PER_PAGE = 6;

const CoursesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchQuery, selectedCategory, selectedLevel, sortBy } = useAppSelector((s) => s.courses);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...courses];
    if (searchQuery) result = result.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if (selectedCategory !== 'All') result = result.filter((c) => c.category === selectedCategory);
    if (selectedLevel !== 'All') result = result.filter((c) => c.level === selectedLevel);
    if (sortBy === 'popular') result.sort((a, b) => b.students - a.students);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'price_low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price_high') result.sort((a, b) => b.price - a.price);
    return result;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <Box sx={{ pt: 12, pb: 10, bgcolor: '#F8F9FF', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }} gutterBottom>
            Explore <Box component="span" sx={{ color: 'primary.main' }}>Courses</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover {courses.length}+ courses from expert instructors across all skill levels.
          </Typography>
        </Box>

        {/* Filters */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            mb: 4,
            p: 3,
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
          }}
        >
          <TextField
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => { dispatch(setSearchQuery(e.target.value)); setPage(1); }}
            size="small"
            sx={{ flexGrow: 1, minWidth: 200 }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon sx={{ fontSize: 18 }} /></InputAdornment>,
            }}
          />

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              value={selectedCategory}
              onChange={(e) => { dispatch(setSelectedCategory(e.target.value)); setPage(1); }}
            >
              <MenuItem value="All">All Categories</MenuItem>
              {categories.map((c) => <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Level</InputLabel>
            <Select
              label="Level"
              value={selectedLevel}
              onChange={(e) => { dispatch(setSelectedLevel(e.target.value)); setPage(1); }}
            >
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((l) => (
                <MenuItem key={l} value={l}>{l}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              label="Sort By"
              value={sortBy}
              onChange={(e) => dispatch(setSortBy(e.target.value))}
            >
              <MenuItem value="popular">Most Popular</MenuItem>
              <MenuItem value="rating">Highest Rated</MenuItem>
              <MenuItem value="price_low">Price: Low to High</MenuItem>
              <MenuItem value="price_high">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Active filters */}
        {(selectedCategory !== 'All' || selectedLevel !== 'All' || searchQuery) && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1, alignSelf: 'center' }}>
              <TuneIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
              Active filters:
            </Typography>
            {searchQuery && <Chip label={`"${searchQuery}"`} onDelete={() => dispatch(setSearchQuery(''))} size="small" />}
            {selectedCategory !== 'All' && <Chip label={selectedCategory} onDelete={() => dispatch(setSelectedCategory('All'))} size="small" color="primary" />}
            {selectedLevel !== 'All' && <Chip label={selectedLevel} onDelete={() => dispatch(setSelectedLevel('All'))} size="small" color="secondary" sx={{ color: '#050505' }} />}
          </Box>
        )}

        {/* Results count */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Showing <strong>{filtered.length}</strong> courses
        </Typography>

        {/* Grid */}
        {paginated.length > 0 ? (
          <>
            <Grid container spacing={3}>
              {paginated.map((course) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
            {pageCount > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(_, v) => { setPage(v); window.scrollTo(0, 0); }}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 12 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>No courses found</Typography>
            <Typography color="text.secondary">Try adjusting your search or filters.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CoursesPage;
