import { createTheme, alpha } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

const theme = createTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    background: {
      default: palette.background.default,
      paper: palette.background.paper,
    },
    text: palette.text,
    error: palette.error,
    success: palette.success,
    warning: palette.warning,
  },
  typography: {
    ...typography,
    fontFamily: typography.fontFamily,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 28px',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          transition: 'all 0.25s ease',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 50,
            '& fieldset': {
              borderColor: palette.grey[200],
            },
            '&:hover fieldset': {
              borderColor: palette.primary.main,
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: ${palette.primary.main}; border-radius: 3px; }
      `,
    },
  },
});

export default theme;
