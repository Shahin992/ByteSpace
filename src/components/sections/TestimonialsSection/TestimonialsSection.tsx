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
    <Box component="section" sx={{ position: 'relative', bgcolor: '#F9FAFB', overflow: 'hidden', py: { xs: 8, md: 16 }, px: { xs: 3, md: 6, lg: 12 } }}>
      
      {/* Background Ellipses */}
      <Box 
        component="img" 
        src="/assets/review/review top middle -Ellipse 12.svg" 
        sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: { xs: 400, md: 800 }, zIndex: 0 }} 
        alt=""
      />
      <Box 
        component="img" 
        src="/assets/review/right side -Ellipse 11.svg" 
        sx={{ position: 'absolute', top: '0%', right: '0%', width: { xs: 400, md: 700 }, zIndex: 0 }} 
        alt=""
      />
      <Box 
        component="img" 
        src="/assets/review/left bottom Ellipse 8.svg" 
        sx={{ position: 'absolute', bottom: '-15%', left: '-10%', width: { xs: 300, md: 600 }, zIndex: 0 }} 
        alt=""
      />

      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: { xs: 4, md: 8 }, 
          alignItems: 'center', 
          mb: { xs: 8, md: 12 } 
        }}>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Clash Display, sans-serif',
            color: '#000000', 
            fontWeight: 700, 
            fontSize: { xs: '2.5rem', md: '3.5rem' }, 
            lineHeight: 1.2 
          }}>
            Discover What Our<br/>Community Is Saying
          </Typography>
          <Typography sx={{ color: '#4F4F4F', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.6 }}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, width: '100%' }}>
          {testimonials.map((testimonial, idx) => (
            <Box 
              key={idx} 
              sx={{ 
                bgcolor: 'white', 
                borderRadius: '24px', 
                p: { xs: 3, md: 4 }, 
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.08)' 
                }
              }}
            >
              <Avatar src={`/assets/review/reviewer-${idx+1}.png`} sx={{ width: 72, height: 72, mb: 2.5, bgcolor: '#E5E7EB' }} />
              
              <Box sx={{ mb: 2.5 }}>
                <Typography sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 600, color: '#000000', fontSize: '1.125rem', mb: 0.25 }}>
                  {testimonial.name}
                </Typography>
                <Typography sx={{ color: '#3159F4', fontSize: '0.875rem', fontWeight: 400 }}>
                  {testimonial.role}
                </Typography>
              </Box>

              <Typography sx={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {testimonial.text}
              </Typography>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};
