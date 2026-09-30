import React from 'react';
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Link } from 'react-router-dom';
import type { Course } from '../../../data/courses';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const randomAvatars = React.useMemo(() => {
    return Array.from({ length: 4 }).map(() => `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`);
  }, []);
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '32px', // Match very large rounded corners of the card
        boxShadow: 'none',
        border: '1px solid #E5E7EB', // Subtle grey border
        p: 2, // Padding around the whole inner content
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px -10px rgba(0,0,0,0.1)',
        },
      }}
    >
      {/* Thumbnail */}
      <Box sx={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', mb: 2 }}>
        <CardMedia
          component="img"
          height="220"
          image={course.thumbnail}
          alt={course.title}
          sx={{ objectFit: 'cover' }}
        />
        
        {/* Floating Pills Overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            right: 12,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 0.5,
          }}
        >
          {['17 Lessons', course.duration || '2 hours 16 mins', '59 Comments'].map((text, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                px: 1, // reduced padding
                py: 0.5,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title & Rating Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
          <Typography
            component={Link}
            to={`/courses/${course.id}`}
            variant="h6"
            sx={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600, 
              color: '#000000',
              textDecoration: 'none',
              lineHeight: '120%',
              fontSize: '20px',
              letterSpacing: '-0.01em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              '&:hover': { color: '#2563EB' },
              pr: 1,
            }}
          >
            {course.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
            <Typography sx={{ fontWeight: 500, fontSize: '1.2rem', color: '#6B7280' }}>
              {course.rating}
            </Typography>
            <StarRateRoundedIcon sx={{ color: '#D1D5DB', fontSize: 22 }} />
          </Box>
        </Box>

        {/* Author */}
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.9rem', fontWeight: 400 }}>
            by{' '}
            <Typography component="span" sx={{ color: '#2563EB', fontWeight: 500, fontSize: 'inherit' }}>
              {course.instructor || 'purepearl studio'}
            </Typography>
          </Typography>
        </Box>

        {/* Level and Avatars Row */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          {/* Beginner Badge */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5, 
              bgcolor: '#F3F4F6', 
              px: 2, 
              py: 0.75, 
              borderRadius: '20px' 
            }}
          >
            <SignalCellularAltIcon sx={{ fontSize: 18, color: '#4B5563' }} />
            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#4B5563' }}>
              {course.level || 'Beginner'}
            </Typography>
          </Box>

          {/* Avatars */}
          <AvatarGroup 
            max={5} 
            sx={{ 
              '& .MuiAvatar-root': { width: 34, height: 34, fontSize: '0.85rem', border: '2px solid #fff' },
            }}
          >
            {randomAvatars.map((src, index) => (
              <Avatar key={index} alt={`User ${index + 1}`} src={src} />
            ))}
            <Avatar alt="User count" sx={{ bgcolor: '#D4FA37', color: '#000', fontWeight: 600 }}>
              26+
            </Avatar>
          </AvatarGroup>
        </Box>

        {/* Price Row */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mt: 'auto' }}>
          <Typography sx={{ fontWeight: 800, color: '#2563EB', fontSize: '1.5rem' }}>
            ${course.price}
          </Typography>
          <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem', fontWeight: 500 }}>
            /lifetime
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CourseCard;
