import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1" sx={{ color: 'primary.main', fontSize: '8rem', fontWeight: 900, mb: 1, lineHeight: 1 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2,  fontWeight: 800 }} >
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button component={Link} to="/" variant="contained" size="large" sx={{ fontWeight: 700 }}>
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
