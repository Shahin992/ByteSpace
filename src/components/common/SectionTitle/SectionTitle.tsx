// @ts-nocheck
import React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

interface SectionTitleProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  sx?: SxProps<Theme>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  dark = false,
  sx,
}) => {
  return (
    <Box sx={{ textAlign: align, mb: 6, ...sx }}>
      {badge && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: dark ? 'rgba(190,255,0,0.15)' : 'rgba(25,25,252,0.08)',
            color: dark ? '#BEFF00' : 'primary.main',
            px: 2.5,
            py: 0.7,
            borderRadius: 50,
            mb: 2,
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {badge}
        </Box>
      )}
      <Typography
        variant="h2"
        sx={{
          color: dark ? '#FFFFFF' : 'text.primary',
          fontWeight: 800,
          mb: subtitle ? 2 : 0,
          '& span': {
            color: dark ? '#BEFF00' : 'primary.main',
            position: 'relative',
          },
        }}
      >
        {title}
        {titleHighlight && <span> {titleHighlight}</span>}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: dark ? 'rgba(255,255,255,0.7)' : 'text.secondary',
            maxWidth: 600,
            mx: align === 'center' ? 'auto' : 0,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
