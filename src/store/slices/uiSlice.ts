import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  mobileMenuOpen: boolean;
  notification: {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  };
}

const initialState: UIState = {
  mobileMenuOpen: false,
  notification: {
    open: false,
    message: '',
    severity: 'info',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
    showNotification(
      state,
      action: PayloadAction<{ message: string; severity: UIState['notification']['severity'] }>
    ) {
      state.notification = { open: true, ...action.payload };
    },
    hideNotification(state) {
      state.notification.open = false;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, showNotification, hideNotification } =
  uiSlice.actions;
export default uiSlice.reducer;
