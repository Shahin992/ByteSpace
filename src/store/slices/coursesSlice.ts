import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Course } from '../../data/courses';

interface CoursesState {
  searchQuery: string;
  selectedCategory: string;
  selectedLevel: string;
  sortBy: string;
  wishlist: string[];
  enrolledCourses: string[];
}

const initialState: CoursesState = {
  searchQuery: '',
  selectedCategory: 'All',
  selectedLevel: 'All',
  sortBy: 'popular',
  wishlist: [],
  enrolledCourses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSelectedLevel(state, action: PayloadAction<string>) {
      state.selectedLevel = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    toggleWishlist(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter((cid) => cid !== id);
      } else {
        state.wishlist.push(id);
      }
    },
    enrollCourse(state, action: PayloadAction<string>) {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload);
      }
    },
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSelectedLevel,
  setSortBy,
  toggleWishlist,
  enrollCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
