export const palette = {
  primary: {
    main: '#1919FC',
    light: '#4444FF',
    dark: '#0000CC',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#BEFF00',
    light: '#D4FF4D',
    dark: '#99CC00',
    contrastText: '#050505',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F8F9FF',
    dark: '#050505',
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
    disabled: '#999999',
  },
  error: {
    main: '#FF4444',
  },
  success: {
    main: '#22C55E',
  },
  warning: {
    main: '#F59E0B',
  },
  grey: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
} as const;

export type Palette = typeof palette;
