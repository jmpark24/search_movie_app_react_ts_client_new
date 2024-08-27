// src/redux/thunks/movieThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL: string | undefined = process.env.REACT_APP_URL;

// API 요청 함수
const fetchMoviesFromAPI = async (query: string, page: number) => {
  const response = await fetch(`${URL}/api/movie`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: query, page }),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

// 비동기 액션 생성
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ page, query }: { page: number; query: string }, thunkAPI) => {
    try {
      const data = await fetchMoviesFromAPI(query, page);
      if (data.Response === 'True') {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.Error);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch movies');
    }
  }
);

const fetchMovieDetailsFromAPI = async (id: string) => {
  const response = await fetch(`${URL}/api/movie`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data;
};

export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetails',
  async (id: string, thunkAPI) => {
    try {
      const data = await fetchMovieDetailsFromAPI(id);
      if (data.Response === 'True') {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.Error);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch movie details');
    }
  }
);
