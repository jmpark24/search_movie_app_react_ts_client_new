import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getMovieDetails } from '../redux/thunks/movieThunks';
import { setMovieDetails } from '../redux/slices/movieDetailSlice';
import NotFound from './NotFound';
import { unwrapResult } from '@reduxjs/toolkit';
import Skeleton from '../components/Skeleton';

const Movie: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const movieDetail = useSelector((state: RootState) => state.movieDetails.movieDetails);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id || id === ':id' || (movieDetail && movieDetail.imdbID === id)) {
        setLoading(false);
        return;
      } else {
        setLoading(true);
        setError(null);
        try {
          const actionResult = await dispatch(getMovieDetails(id));
          const data = unwrapResult(actionResult);

          dispatch(setMovieDetails(data));
        } catch (e) {
          setError(`영화 세부 정보를 가져오는 데 실패했습니다: ${e}`);
          alert(`영화 세부 정보를 가져오는 데 실패했습니다: ${e}`);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMovieDetails();
  }, [id, dispatch, movieDetail]);

  if (!id || id === ':id') {
    return (
      <div className="max-w-container mx-auto px-5 py-10 text-white">
        <h1 className="text-2xl sm:text-4xl mb-4">영화를 선택해 주세요</h1>
        <p>특정 영화를 보려면 목록에서 선택하거나 검색을 통해 영화를 찾아보세요.</p>
      </div>
    );
  }

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <NotFound />;
  }

  const bigPoster = movieDetail?.Poster.replace('SX300', 'SX700');

  return (
    <div className="max-w-container mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="relative overflow-hidden bg-gray-800 rounded-lg">
          <img
            src={bigPoster}
            alt={movieDetail?.Title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex-grow">
          <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            {movieDetail?.Title}
          </div>
          <div className="text-yellow-400 mb-4">
            <span>{movieDetail?.Released}</span>
            &nbsp;/&nbsp;
            <span>{movieDetail?.Runtime}</span>
            &nbsp;/&nbsp;
            <span>{movieDetail?.Country}</span>
          </div>
          <div className="text-white mb-4">{movieDetail?.Plot}</div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">평점</h3>
            {movieDetail?.Ratings.map((rating) => (
              <p key={rating.Source} className="text-white">
                {rating.Source} - {rating.Value}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mt-6">출연 배우</h3>
            <p className="text-white">{movieDetail?.Actors}</p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mt-6">감독</h3>
            <p className="text-white">{movieDetail?.Director}</p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mt-6">제작사</h3>
            <p className="text-white">{movieDetail?.Production}</p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mt-6">장르</h3>
            <p className="text-white">{movieDetail?.Genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
