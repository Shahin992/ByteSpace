import React from 'react';
import { Card, CardContent, Box, Typography, Avatar, Rating, Button, Chip } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import { Link } from 'react-router-dom';
import { Instructor } from '../../../data/instructors';

const InstructorCard: React.FC<{ instructor: Instructor }> = ({ instructor }) => {
  return (
    <Card sx={{ borderRadius: 3, textAlign: 'center', p: 1 }}>
      <CardContent sx={{ pb: '16px !important' }}>
        <Avatar
          src={instructor.avatar}
          sx={{
            width: 90,
            height: 90,
            mx: 'auto',
            mb: 2,
            border: '4px solid',
            borderColor: 'primary.main',
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
          {instructor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {instructor.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 2 }}>
          <Rating value={instructor.rating} precision={0.1} readOnly size="small" />
          <Typography variant="caption" sx={{ fontWeight: 700 }} color="warning.main">
            {instructor.rating}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2.5 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4, justifyContent: 'center' }}>
              <PeopleAltIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                {(instructor.students / 1000).toFixed(1)}k
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">Students</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4, justifyContent: 'center' }}>
              <PlayLessonIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ fontWeight: 700 }}>{instructor.courses}</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">Courses</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, justifyContent: 'center', mb: 2.5 }}>
          {instructor.skills.slice(0, 3).map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{ fontSize: '0.7rem', bgcolor: 'rgba(25,25,252,0.07)', color: 'primary.main', fontWeight: 600 }}
            />
          ))}
        </Box>

        <Button
          component={Link}
          to={`/instructors/${instructor.id}`}
          variant="outlined"
          fullWidth
          size="small"
          sx={{ borderRadius: 50 }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
