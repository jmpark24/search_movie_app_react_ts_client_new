import Headline from '../components/Headline';
import MovieList from '../components/MovieList';
import MovieListMore from '../components/MovieListMore';
import Search from '../components/Search';

const Home = () => {
  return (
    <div
      className="
      max-w-container 
      mx-auto 
      my-0 
      px-5
      py-10 
      sm:px-10
      sm:py-10 
      lg:px-0
      lg:py-10 
    "
    >
      <Headline />
      <Search />
      <MovieList />
      <MovieListMore />
    </div>
  );
};

export default Home;
