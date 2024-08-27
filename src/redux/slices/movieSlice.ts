import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchMovies, getMovieDetails } from '../thunks/movieThunks';
import { MovieState } from '../types';

const initialState: MovieState = {
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: null,
  loading: false,
  message: '영문으로 영화 제목을 검색해보세요!',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
      state.page = 1; // 페이지를 초기화
      state.movies = []; // 기존 영화 목록을 초기화
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
        state.movies = [...state.movies, ...(action.payload.Search || [])];
        state.pageMax = Math.ceil(+action.payload.totalResults / 10); // 페이지 수 계산
        state.message = '';
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload as string;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movie = action.payload; // 영화 상세 정보 업데이트
      });
  },
});

export const { setSearchText, incrementPage } = movieSlice.actions;
export default movieSlice.reducer;
