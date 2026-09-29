// @ts-nocheck
import React from 'react';
import { Box, Typography } from '@mui/material';
import type { Category } from '../../../data/categories';
import { useNavigate } from 'react-router-dom';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/courses?category=${category.name}`)}
      sx={{
        bgcolor: category.bgColor,
        borderRadius: 3,
        p: 3,
        cursor: 'pointer',
        border: `1.5px solid ${category.color}22`,
        transition: 'all 0.3s ease',
        textAlign: 'center',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 12px 30px ${category.color}28`,
          borderColor: `${category.color}66`,
        },
      }}
    >
      <Typography sx={{ fontSize: '2.2rem', mb: 1.5 }}>{category.icon}</Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 700,  color: '#1A1A1A', mb: 0.5 }}>
        {category.name}
      </Typography>
      <Typography variant="caption" sx={{ color: '#666', fontWeight: 500 }}>
        {category.count} courses
      </Typography>
    </Box>
  );
};

export default CategoryCard;
