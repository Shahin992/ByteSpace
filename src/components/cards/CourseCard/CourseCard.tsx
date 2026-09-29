// @ts-nocheck
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Chip,
  Avatar,
  Rating,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutlined';
import { Link } from 'react-router-dom';
import type { Course } from '../../../data/courses';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppStore';
import { toggleWishlist } from '../../../store/slices/coursesSlice';

const tagColors: Record<string, { bg: string; color: string }> = {
  'Best Seller': { bg: '#FFF3CD', color: '#856404' },
  New: { bg: '#D1FAE5', color: '#065F46' },
  Trending: { bg: '#EDE9FE', color: '#5B21B6' },
  Popular: { bg: '#FEE2E2', color: '#991B1B' },
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((s) => s.courses.wishlist);
  const isWishlisted = wishlist.includes(course.id);
  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
  const tagStyle = course.tag ? tagColors[course.tag] : null;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {/* Thumbnail */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="195"
          image={course.thumbnail}
          alt={course.title}
          sx={{ transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.05)' } }}
        />
        {/* Play overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(0,0,0,0)',
            transition: 'bgcolor 0.3s',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.35)' },
            '& .play-icon': { opacity: 0, transition: 'opacity 0.3s' },
            '&:hover .play-icon': { opacity: 1 },
          }}
        >
          <PlayCircleOutlineIcon className="play-icon" sx={{ fontSize: 48, color: '#fff' }} />
        </Box>
        {/* Discount badge */}
        {discount > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              bgcolor: '#BEFF00',
              color: '#050505',
              fontWeight: 800,
              fontSize: '0.75rem',
              px: 1.2,
              py: 0.3,
              borderRadius: 1,
            }}
          >
            -{discount}%
          </Box>
        )}
        {/* Wishlist button */}
        <IconButton
          size="small"
          onClick={(e) => { e.preventDefault(); dispatch(toggleWishlist(course.id)); }}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(4px)',
            '&:hover': { bgcolor: '#fff' },
          }}
        >
          {isWishlisted ? (
            <FavoriteIcon sx={{ color: '#EF4444', fontSize: 18 }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 18 }} />
          )}
        </IconButton>
        {/* Tag */}
        {course.tag && tagStyle && (
          <Chip
            label={course.tag}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 12,
              bgcolor: tagStyle.bg,
              color: tagStyle.color,
              fontWeight: 700,
              fontSize: '0.7rem',
              height: 22,
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        {/* Category */}
        <Typography
          variant="caption"
          sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          {course.category}
        </Typography>

        {/* Title */}
        <Typography
          component={Link}
          to={`/courses/${course.id}`}
          variant="subtitle1"
          sx={{ fontWeight: 700, 
            display: 'block',
            mt: 0.5,
            mb: 1.5,
            color: 'text.primary',
            textDecoration: 'none',
            lineHeight: 1.4,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {course.title}
        </Typography>

        {/* Instructor */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <Avatar src={course.instructorAvatar} sx={{ width: 24, height: 24 }} />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            {course.instructor}
          </Typography>
        </Box>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
          <Rating value={course.rating} precision={0.1} readOnly size="small" />
          <Typography variant="caption" sx={{ fontWeight: 700,  color: '#F59E0B' }}>
            {course.rating}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            ({course.reviews.toLocaleString()})
          </Typography>
        </Box>

        {/* Meta */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">{course.duration}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PeopleAltIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">{course.students.toLocaleString()}</Typography>
          </Box>
        </Box>

        {/* Price */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 1.5, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }} color="primary.main">
            ${course.price}
          </Typography>
          {course.originalPrice > course.price && (
            <Typography
              variant="body2"
              sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
            >
              ${course.originalPrice}
            </Typography>
          )}
          <Chip
            label={course.level}
            size="small"
            sx={{
              ml: 'auto',
              bgcolor: 'rgba(25,25,252,0.08)',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.7rem',
              height: 22,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
