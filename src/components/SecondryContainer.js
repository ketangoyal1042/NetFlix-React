import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-top-60 md:-top-32 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondryContainer;
