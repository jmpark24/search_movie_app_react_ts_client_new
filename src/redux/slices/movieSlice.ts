import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchMovies } from '../thunks/movieThunks';
import { MovieState } from '../types/omdb';

const initialState: MovieState = {
  searchText: '',
  page: 1,
  pageMax: 0,
  movies: [],
  loading: false,
  message: '영문으로 영화 제목을 검색해보세요!',
};

const moviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
      state.page = 1;
      state.movies = [];
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.message = '';
        if (action.payload && action.payload.Search && action.payload.totalResults) {
          state.movies = [...state.movies, ...action.payload.Search];
          state.pageMax = Math.ceil(action.payload.totalResults / 10);
        }
      })
      .addCase(searchMovies.rejected, (state) => {
        state.loading = false;
        state.message = '검색 된 영화가 없습니다!';
      });
  },
});

export const { setSearchText, incrementPage } = moviesSlice.actions;
export default moviesSlice.reducer;
