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
  const params = useParams();
  // const movie = useSelector((state: RootState) => state.movie.movie);
  const movieDetail = useSelector((state: RootState) => state.movieDetails.movieDetails);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id || id === ':id' || (movieDetail && movieDetail.imdbID === params.id)) {
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
          setError(`Failed to fetch movie details: ${e}`);
          alert(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMovieDetails();
  }, [id, dispatch, error, movieDetail, params.id]);

  if (!id || id === ':id') {
    return (
      <div className="max-w-container mx-auto my-0 px-5 py-10 sm:px-10 sm:py-10 lg:px-0 lg:py-10 text-color-white-50">
        <h1 className="text-4xl mb-4">영화를 선택해 주세요</h1>
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

  // movie 상태에 있는 데이터로 렌더링
  const bigPoster = movieDetail?.Poster.replace('SX300', 'SX700');

  return (
    <div className="max-w-container mx-auto my-0 px-5 py-10 sm:px-10 sm:py-10 lg:px-0 lg:py-10">
      <div className="flex gap-16 lg:gap-8 p-5">
        <div
          className="flex-shrink-0 bg-cover bg-center rounded-lg bg-color-area"
          style={{
            backgroundImage: `url(${bigPoster})`,
            width: '500px',
            height: 'calc(500px * 3 / 2)',
          }}
        />
        <div className="flex-grow">
          <div className="text-color-white text-5xl font-oswald leading-tight mb-8">
            {movieDetail?.Title}
          </div>
          <div className="text-color-primary mb-5">
            <span>{movieDetail?.Released}</span>
            &nbsp;/&nbsp;
            <span>{movieDetail?.Runtime}</span>
            &nbsp;/&nbsp;
            <span>{movieDetail?.Country}</span>
          </div>
          <div className="text-color-white-50 mb-5">{movieDetail?.Plot}</div>
          <div>
            <h3 className="text-color-white text-xl font-oswald my-6">Ratings</h3>
            {movieDetail?.Ratings.map((rating) => (
              <p key={rating.Source} className="text-color-white-50">
                {rating.Source} - {rating.Value}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-color-white text-xl font-oswald my-6">Actors</h3>
            <p className="text-color-white-50">{movieDetail?.Actors}</p>
          </div>
          <div>
            <h3 className="text-color-white text-xl font-oswald my-6">Director</h3>
            <p className="text-color-white-50">{movieDetail?.Director}</p>
          </div>
          <div>
            <h3 className="text-color-white text-xl font-oswald my-6">Production</h3>
            <p className="text-color-white-50">{movieDetail?.Production}</p>
          </div>
          <div>
            <h3 className="text-color-white text-xl font-oswald my-6">Genre</h3>
            <p className="text-color-white-50">{movieDetail?.Genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
