import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDetails, SearchMovies } from '../types/omdb';

const URL: string | undefined = process.env.REACT_APP_URL;

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ title, page }: { title: string; page: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${URL}/searchMovies?title=${encodeURIComponent(title)}&page=${page}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          return rejectWithValue('영화를 찾을 수 없습니다.');
        } else if (response.status === 500) {
          return rejectWithValue('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        return rejectWithValue(`API 요청 실패: 상태 코드 ${response.status}`);
      }

      const data = (await response.json()) as SearchMovies;

      if (data.Response === 'True') {
        return data;
      }
    } catch (error) {
      return rejectWithValue('API 요청 중 네트워크 오류가 발생했습니다.');
    }
  }
);

export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetails',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/getMovieDetails?id=${encodeURIComponent(id)}`);

      if (!response.ok) {
        // 응답이 200 OK가 아닌 경우 상태 코드에 따라 처리
        if (response.status === 404) {
          return rejectWithValue('영화 정보를 찾을 수 없습니다.');
        } else if (response.status === 500) {
          return rejectWithValue('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        return rejectWithValue(`API 요청 실패: 상태 코드 ${response.status}`);
      }

      const data = (await response.json()) as MovieDetails;

      if (data.Response === 'True') {
        return data;
      }
    } catch (error) {
      return rejectWithValue('API 요청 중 네트워크 오류가 발생했습니다.');
    }
  }
);
