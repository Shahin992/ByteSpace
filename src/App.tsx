import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Snackbar, Alert } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/Home/HomePage';
import CoursesPage from './pages/Courses/CoursesPage';
import CourseDetailPage from './pages/Courses/CourseDetailPage';
import InstructorsPage from './pages/Instructors/InstructorsPage';
import BlogPage from './pages/Blog/BlogPage';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { useAppSelector, useAppDispatch } from './hooks/useAppStore';
import { hideNotification } from './store/slices/uiSlice';

// Helper for page transitions
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const notification = useAppSelector((s) => s.ui.notification);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main Layout Routes (Has Navbar & Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/courses" element={<PageTransition><CoursesPage /></PageTransition>} />
            <Route path="/courses/:id" element={<PageTransition><CourseDetailPage /></PageTransition>} />
            <Route path="/instructors" element={<PageTransition><InstructorsPage /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
          </Route>

          {/* Auth Routes (No Navbar/Footer) */}
          <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><SignupPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={() => dispatch(hideNotification())}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => dispatch(hideNotification())} severity={notification.severity} sx={{ width: '100%', borderRadius: 2 }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
