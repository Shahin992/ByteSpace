// @ts-nocheck
import React from 'react';
import { Card, CardMedia, CardContent, Box, Typography, Avatar, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../../data/blog';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={post.thumbnail}
          alt={post.title}
          sx={{ transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.05)' } }}
        />
        <Chip
          label={post.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: 'primary.main',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.7rem',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary">{post.readTime}</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mx: 1 }}>·</Typography>
          <Typography variant="caption" color="text.secondary">{post.date}</Typography>
        </Box>

        <Typography
          component={Link}
          to={`/blog/${post.id}`}
          variant="h6"
          sx={{ fontWeight: 700, 
            display: 'block',
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
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2.5,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {post.excerpt}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Avatar src={post.authorAvatar} sx={{ width: 32, height: 32 }} />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>{post.author}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
