import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailState, MovieDetails } from '../types/omdb';

const initialState: MovieDetailState = {
  movieDetails: null,
};

const movieDetailsSlice = createSlice({
  name: 'getMovieDetails',
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { setMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
