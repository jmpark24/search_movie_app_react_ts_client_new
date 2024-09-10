import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/movies';
import { searchMovies } from '../redux/thunks/movieThunks';
import { incrementPage } from '../redux/slices/movieSlice';

const MovieListMore: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { page, pageMax, searchText } = useSelector((state: RootState) => state.Movies);

  const [showButton, setShowButton] = useState<boolean>(pageMax !== undefined && pageMax > page);

  useEffect(() => {
    setShowButton(pageMax !== undefined && pageMax > page);
  }, [page, pageMax]);

  const handleClick = async () => {
    dispatch(incrementPage());
    await dispatch(searchMovies({ page: page + 1, title: searchText }));
  };

  return showButton ? (
    <div className="w-full my-5 flex justify-center">
      <button
        className="text-color-white bg-color-area cursor-pointer border-none rounded outline-none h-[50px] py-0 px-5 text-sm font-bold w-[300px]"
        onClick={handleClick}
      >
        더 보기..
      </button>
    </div>
  ) : null;
};

export default MovieListMore;
