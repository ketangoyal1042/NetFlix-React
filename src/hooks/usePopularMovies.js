import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {MOVIES_HEADER} from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=> store.movies.popularMovies);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIES_HEADER
    );
    const result = await response.json();
    dispatch(addPopularMovies(result.results));
  };

  useEffect(() => {
    !popularMovies?.length && getPopularMovies();
  }, []);
};

export default usePopularMovies;
