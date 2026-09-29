// @ts-nocheck
import React from 'react';
import {
  Box, Container, Grid, Typography, Button, Avatar, Rating, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import { toggleWishlist, enrollCourse } from '../../store/slices/coursesSlice';
import { showNotification } from '../../store/slices/uiSlice';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((s) => s.courses.wishlist);
  const enrolled = useAppSelector((s) => s.courses.enrolledCourses);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    navigate('/courses');
    return null;
  }

  const isWishlisted = wishlist.includes(course.id);
  const isEnrolled = enrolled.includes(course.id);
  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  const handleEnroll = () => {
    dispatch(enrollCourse(course.id));
    dispatch(showNotification({ message: `Enrolled in "${course.title}"! 🎉`, severity: 'success' }));
  };

  return (
    <Box sx={{ pt: 10, minHeight: '100vh' }}>
      {/* Hero */}
      <Box sx={{ bgcolor: '#050505', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                label={course.category}
                size="small"
                sx={{ bgcolor: 'rgba(190,255,0,0.15)', color: '#BEFF00', fontWeight: 700, mb: 2 }}
              />
              <Typography variant="h2" sx={{ fontWeight: 800,  color: '#fff', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                {course.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.8 }}>
                {course.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                <Rating value={course.rating} precision={0.1} readOnly size="small" />
                <Typography variant="body2" sx={{ fontWeight: 700,  color: '#F59E0B' }}>{course.rating}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>({course.reviews.toLocaleString()} reviews)</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                {[
                  { icon: PeopleAltIcon, label: `${course.students.toLocaleString()} students` },
                  { icon: AccessTimeIcon, label: course.duration },
                  { icon: SignalCellularAltIcon, label: course.level },
                  { icon: PlayCircleIcon, label: `${course.lessons} lessons` },
                ].map(({ icon: Icon, label }) => (
                  <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Icon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }} />
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.65)' }}>{label}</Typography>
                  </Box>
                ))}
              </Box>

              {/* Instructor */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 3 }}>
                <Avatar src={course.instructorAvatar} sx={{ width: 40, height: 40 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>Instructor</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700,  color: '#fff' }}>{course.instructor}</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Enrollment Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                <Box
                  component="img"
                  src={course.thumbnail}
                  alt={course.title}
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.5 }}>
                    <Typography variant="h3" sx={{ fontWeight: 900 }} color="primary.main">${course.price}</Typography>
                    <Typography sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>${course.originalPrice}</Typography>
                    <Chip label={`${discount}% OFF`} size="small" sx={{ bgcolor: '#BEFF00', color: '#050505', fontWeight: 800 }} />
                  </Box>
                  <Typography variant="caption" color="error.main" sx={{ fontWeight: 700 }}>⚡ 2 days left at this price!</Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleEnroll}
                    disabled={isEnrolled}
                    sx={{ mt: 2.5, mb: 1.5, py: 1.5, fontWeight: 800, fontSize: '1rem' }}
                  >
                    {isEnrolled ? '✅ Enrolled' : 'Enroll Now'}
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    startIcon={isWishlisted ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    onClick={() => dispatch(toggleWishlist(course.id))}
                    sx={{ fontWeight: 600 }}
                  >
                    {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                  </Button>

                  <Box sx={{ mt: 2.5 }}>
                    {['Full lifetime access', 'Certificate of completion', 'Downloadable resources', '30-day money-back guarantee'].map((item) => (
                      <Box key={item} sx={{ display: 'flex', gap: 1, alignItems: 'center', py: 0.6 }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                        <Typography variant="caption">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Curriculum */}
      <Box sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }} gutterBottom>Course Curriculum</Typography>
              <Divider sx={{ mb: 3 }} />
              {course.curriculum.map((section, i) => (
                <Accordion key={i} defaultExpanded={i === 0} sx={{ mb: 1.5, borderRadius: '12px !important', '&:before': { display: 'none' }, border: '1px solid', borderColor: 'divider' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 1 }}>
                    <Typography sx={{ fontWeight: 700 }}>{section.title}</Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto', mr: 2 }}>
                      {section.lessons.length} lessons
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0 }}>
                    <List dense>
                      {section.lessons.map((lesson, j) => (
                        <ListItem key={j} sx={{ py: 0.8, borderRadius: 2, '&:hover': { bgcolor: 'action.hover' } }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <PlayCircleIcon sx={{ fontSize: 18, color: lesson.isPreview ? 'primary.main' : 'text.disabled' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={lesson.title}
                            primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                          />
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            {lesson.isPreview && <Chip label="Preview" size="small" color="primary" sx={{ height: 18, fontSize: '0.65rem' }} />}
                            <Typography variant="caption" color="text.secondary">{lesson.duration}</Typography>
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CourseDetailPage;
