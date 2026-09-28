import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch } from '../../../hooks/useAppStore';
import { showNotification } from '../../../store/slices/uiSlice';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      dispatch(showNotification({ message: 'Subscribed successfully! 🎉', severity: 'success' }));
      setEmail('');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0D0DFF 0%, #1919FC 100%)',
        py: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <Box sx={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)' }} />
      <Box sx={{ position: 'absolute', bottom: -80, left: -80, width: 280, height: 280, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.04)' }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: '#BEFF00', fontWeight: 700, letterSpacing: '0.12em', display: 'block', mb: 1 }}
          >
            Stay Updated
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800,  color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, mx: 'auto' }}>
            Get the latest courses, tutorials, and industry insights delivered straight to your inbox every week.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            gap: 1.5,
            maxWidth: 560,
            mx: 'auto',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,0.12)',
                borderRadius: 3,
                color: '#fff',
                backdropFilter: 'blur(10px)',
                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#BEFF00' },
                '& input::placeholder': { color: 'rgba(255,255,255,0.5)' },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              bgcolor: '#BEFF00',
              color: '#050505',
              fontWeight: 700,
              px: 3.5,
              whiteSpace: 'nowrap',
              borderRadius: 3,
              '&:hover': { bgcolor: '#CCFF00' },
            }}
          >
            Subscribe
          </Button>
        </Box>

        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'rgba(255,255,255,0.45)' }}>
          No spam. Unsubscribe anytime. We respect your privacy.
        </Typography>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
