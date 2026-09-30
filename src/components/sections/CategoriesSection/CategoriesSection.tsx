import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';


const categories = [
  { title: 'Design', icon: <DesignServicesOutlinedIcon sx={{ fontSize: 28, color: '#040819' }} /> },
  { title: 'Development', icon: <DeveloperModeOutlinedIcon sx={{ fontSize: 28, color: '#040819' }} /> },
  { title: 'IT & Software', icon: <LaptopMacOutlinedIcon sx={{ fontSize: 28, color: '#040819' }} /> },
  { title: 'Business', icon: <BusinessOutlinedIcon sx={{ fontSize: 28, color: '#040819' }} /> },
  { title: 'Marketing', icon: <Box component="img" src="/assets/branding/marketing-icon.svg" sx={{ width: 28, height: 28 }} alt="Marketing" /> },
  { title: 'Photography', icon: <Box component="img" src="/assets/branding/photography-icon.svg" sx={{ width: 28, height: 28 }} alt="Photography" /> },
];

const CategoriesSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#040819',
              fontSize: { xs: '2rem', md: '2.25rem' },
              lineHeight: 1.2,
              mb: 2.5,
              fontFamily: 'Clash Display, sans-serif'
            }}
          >
            Explore Diverse Learning Paths at Bytespace
          </Typography>
          <Typography
            sx={{
              color: '#828282',
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.6,
              fontFamily: 'Satoshi, sans-serif',
              px: { xs: 2, md: 4 }
            }}
          >
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </Typography>
        </Box>

        {/* Categories Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 }, justifyContent: 'center' }}>
          {categories.map((cat) => (
            <Card
              key={cat.title}
              elevation={0}
              sx={{
                width: { xs: 150, sm: 160, md: 170 },
                height: { xs: 150, sm: 160, md: 170 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '24px',
                border: '1px solid #EAEAEA',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                bgcolor: '#fff',
                '&:hover': {
                  borderColor: '#E5E7EB',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Box
                sx={{
                  width: { xs: 50, md: 56 },
                  height: { xs: 50, md: 56 },
                  borderRadius: '50%',
                  bgcolor: '#D4FA37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: { xs: 1.5, md: 2.5 }
                }}
              >
                {cat.icon}
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  color: '#111827',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: 'center'
                }}
              >
                {cat.title}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CategoriesSection;
