import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { SimpleMovie } from '../redux/types';
import MovieItem from './MovieItem';

const MovieList: FC = () => {
  const { movies, loading, message } = useSelector((state: RootState) => state.movie);

  return (
    <div className="p-[20px] rounded-[4px] bg-color-area">
      {loading && <div className="the-loader"></div>}
      {message && !loading ? (
        <div className="text-color-primary text-[20px] text-center">{message}</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-[20px]">
          {movies.length > 0
            ? movies.map((movie: SimpleMovie) => <MovieItem key={movie.imdbID} movie={movie} />)
            : !loading && <div className="text-center">No movies found.</div>}
        </div>
      )}
    </div>
  );
};

export default MovieList;
