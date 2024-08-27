// redux/slices/movieDetailsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailState, MovieDetails } from '../types'; // 이미 정의된 MovieDetails 타입을 사용

const initialState: MovieDetailState = {
  movieDetails: null,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
      state.movieDetails = action.payload;
    },
    clearMovieDetails: (state) => {
      state.movieDetails = null;
    },
  },
});

export const { setMovieDetails, clearMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
