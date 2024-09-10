import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../slices/movieSlice';
import movieDetailsReducer from '../slices/movieDetailSlice';
const store = configureStore({
  reducer: {
    Movies: movieReducer,
    MovieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
