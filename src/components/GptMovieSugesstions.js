import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSugesstions = () => {
  const { GptMovies, SearchQueries } = useSelector((store) => store?.gpt);
  if (!GptMovies) return null;
  console.log(SearchQueries);

  return (
    <div className="p-4 text-white  bg-gradient-to-t from-black">
      {GptMovies.map((movie, index) => (
      <div>
        <MovieList key={SearchQueries?.[index]} title={SearchQueries?.[index]} movies={movie} />
      </div>
      ))}
    </div>
  );
};

export default GptMovieSugesstions;
