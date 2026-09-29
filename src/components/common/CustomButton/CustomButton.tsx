// @ts-nocheck
import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  rounded?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  loading = false,
  rounded = true,
  sx,
  disabled,
  ...props
}) => {
  return (
    <Button
      disabled={disabled || loading}
      sx={{
        borderRadius: rounded ? 50 : 2,
        fontWeight: 600,
        textTransform: 'none',
        px: 3.5,
        py: 1.3,
        position: 'relative',
        ...sx,
      }}
      {...props}
    >
      {loading && (
        <CircularProgress
          size={18}
          sx={{ mr: 1, color: 'inherit' }}
        />
      )}
      {children}
    </Button>
  );
};

export default CustomButton;
