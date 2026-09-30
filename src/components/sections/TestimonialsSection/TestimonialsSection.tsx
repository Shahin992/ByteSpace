import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 12, md: 24 }, px: { xs: 3, md: 6, lg: 12 } }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <Box sx={{ textAlign: 'center', maxWidth: 896, mb: 8 }}>
          <Typography variant="h2" sx={{ color: '#000000', fontWeight: 800, fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
            Discover What Our Community Is Saying
          </Typography>
          <Typography sx={{ color: '#4F4F4F', fontSize: { xs: '1.125rem', md: '1.25rem' }, lineHeight: 1.6 }}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, width: '100%' }}>
          {testimonials.map((testimonial, idx) => (
            <Box 
              key={idx} 
              sx={{ 
                bgcolor: 'white', 
                border: '1px solid #E5E6E8', 
                borderRadius: 6, 
                p: 4, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                boxShadow: 1,
                transition: 'box-shadow 0.3s ease',
                '&:hover': { boxShadow: 3 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ width: 56, height: 56, bgcolor: '#E5E7EB' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 800, color: '#000000', fontSize: '1.25rem' }}>{testimonial.name}</Typography>
                  <Typography sx={{ color: '#82868E', fontSize: '0.875rem' }}>{testimonial.role}</Typography>
                </Box>
              </Box>
              <Typography sx={{ color: '#4F4F4F', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                {testimonial.text}
              </Typography>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};
