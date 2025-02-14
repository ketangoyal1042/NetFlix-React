import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIES_HEADER } from "../utils/constants";
import { addTrailerViode } from "../utils/movieSlice";

const useMovieTrailer = (moviewId) =>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=> store.movies.trailerVideo);
  // fetch trailer Vidoe and update the store
  const getMoviewTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${moviewId}/videos`,
      MOVIES_HEADER
    );
    const movies = await res.json();
    const trailers = movies.results.filter((movie) => movie.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : movies.results[0];
    dispatch(addTrailerViode(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviewTrailer();
  }, []);
}

export default useMovieTrailer;