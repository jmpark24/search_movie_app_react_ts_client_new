import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleMovie } from '../redux/types/omdb';

interface Props {
  movie: SimpleMovie;
}

const MovieItem: FC<Props> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative rounded-lg bg-color-black bg-cover overflow-hidden cursor-pointer"
      style={{
        width: '200px',
        height: 'calc(200px * 3 / 2)',
        backgroundImage: `url(${movie.Poster})`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full p-3 text-sm text-center bg-[#0e111be6] backdrop-blur-sm">
        <div className="text-color-primary">{movie.Year}</div>
        <div className="text-color-white">{movie.Title}</div>
      </div>
    </div>
  );
};

export default MovieItem;
