import React from 'react';
import { Box, Typography, Avatar, AvatarGroup } from '@mui/material';
import { Star, CheckCircle } from 'lucide-react';

export const GrowthSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#F8F9FA', py: { xs: 12, md: 24 }, px: { xs: 3, md: 6, lg: 12 }, overflow: 'hidden' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', gap: 8 }}>
        
        {/* Left side content */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h2" sx={{ color: '#000000', fontWeight: 800, fontSize: { xs: '2.25rem', md: '3rem' }, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Your Path to Professional Growth Starts Here!
            </Typography>
            <Typography sx={{ color: '#4F4F4F', fontSize: '1.125rem', lineHeight: 1.6 }}>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4, py: 3, borderTop: '1px solid #E5E6E8', borderBottom: '1px solid #E5E6E8' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 800, fontSize: '1.875rem', color: '#000000' }}>12K</Typography>
              <Typography sx={{ color: '#4F4F4F' }}>Students</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 800, fontSize: '1.875rem', color: '#000000' }}>70+</Typography>
              <Typography sx={{ color: '#4F4F4F' }}>Courses</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 800, fontSize: '1.875rem', color: '#000000' }}>16</Typography>
              <Typography sx={{ color: '#4F4F4F' }}>Creators</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#000000' }}>
              Create & Manage Courses Easily.
            </Typography>
            <Typography sx={{ color: '#4F4F4F', fontSize: '1.125rem' }}>
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mt: 2 }}>
              {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ bgcolor: '#CBFC01', borderRadius: '50%', p: 0.5, color: '#040819', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={18} />
                  </Box>
                  <Typography sx={{ fontWeight: 500, color: '#000000' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right side collage / Placeholders */}
        <Box sx={{ flex: 1, position: 'relative', minHeight: { xs: 400, md: 600 }, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Main big image placeholder */}
          <Box sx={{ position: 'absolute', width: '80%', height: { xs: 300, md: 500 }, bgcolor: '#E5E6E8', borderRadius: 6, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid white', boxShadow: 3, zIndex: 10 }}>
            <Typography sx={{ color: '#82868E' }}>Main Image Placeholder</Typography>
          </Box>

          {/* Floating UI: Learning Progress */}
          <Box sx={{ position: 'absolute', top: { xs: -20, md: 40 }, left: { xs: 0, md: -40 }, bgcolor: 'white', p: 2, borderRadius: 4, boxShadow: 3, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid #E5E6E8', width: 200 }}>
            <Typography sx={{ fontSize: '0.875rem', color: '#4F4F4F' }}>Learning Progress</Typography>
            <Typography sx={{ fontWeight: 800, fontSize: '1.5rem' }}>55%</Typography>
            <Box sx={{ width: '100%', bgcolor: '#F3F4F6', height: 8, borderRadius: 4, overflow: 'hidden' }}>
              <Box sx={{ bgcolor: '#CBFC01', width: '55%', height: '100%', borderRadius: 4 }} />
            </Box>
          </Box>

          {/* Floating UI: Total Revenue */}
          <Box sx={{ position: 'absolute', bottom: { xs: 20, md: 40 }, right: { xs: -10, md: -40 }, bgcolor: '#040819', color: 'white', p: 2.5, borderRadius: 4, boxShadow: 3, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 1, width: 220 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '0.875rem', color: '#9CA3AF' }}>Total Revenue</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>July 1-28</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
              <Typography sx={{ fontWeight: 800, fontSize: '1.5rem' }}>$120.29</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: '#CBFC01', mb: 0.5 }}>+12$</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5, mt: 1, height: 40 }}>
              <Box sx={{ flex: 1, bgcolor: '#3A3B3F', height: '40%', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
              <Box sx={{ flex: 1, bgcolor: '#3A3B3F', height: '60%', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
              <Box sx={{ flex: 1, bgcolor: '#3A3B3F', height: '30%', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
              <Box sx={{ flex: 1, bgcolor: '#3A3B3F', height: '80%', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
              <Box sx={{ flex: 1, bgcolor: '#CBFC01', height: '100%', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
            </Box>
          </Box>

          {/* Floating UI: Happy Students */}
          <Box sx={{ position: 'absolute', bottom: { xs: -20, md: -16 }, left: { xs: 10, md: 40 }, bgcolor: 'white', p: 2, borderRadius: 4, boxShadow: 3, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 1.5, border: '1px solid #E5E6E8', width: 240 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontWeight: 600, color: '#000000' }}>Happy Students</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#000000' }}>
                <Star size={14} className="fill-current" />
                <Typography sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                  4.5 <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(240)</span>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AvatarGroup max={6} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '0.75rem', borderColor: 'white', borderWidth: 2 } }}>
                <Avatar sx={{ bgcolor: '#E5E7EB' }} />
                <Avatar sx={{ bgcolor: '#E5E7EB' }} />
                <Avatar sx={{ bgcolor: '#E5E7EB' }} />
                <Avatar sx={{ bgcolor: '#E5E7EB' }} />
                <Avatar sx={{ bgcolor: '#E5E7EB' }} />
                <Avatar sx={{ bgcolor: '#F3F4F6', color: '#000', fontWeight: 'bold' }}>2K+</Avatar>
              </AvatarGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

