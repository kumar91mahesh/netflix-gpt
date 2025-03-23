import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-index-10">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
