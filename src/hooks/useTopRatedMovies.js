import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {MOVIES_HEADER} from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store=> store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIES_HEADER
    );
    const result = await response.json();
    dispatch(addTopRatedMovies(result.results));
  };

  useEffect(() => {
    !topRatedMovies?.length && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
