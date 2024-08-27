import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../slices/movieSlice';
import movieDetailsReducer from '../slices/movieDetailSlice';
// 스토어 설정
const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieDetails: movieDetailsReducer, // 추가
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
