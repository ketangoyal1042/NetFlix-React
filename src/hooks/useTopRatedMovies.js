import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {MOVIES_HEADER} from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIES_HEADER
    );
    const result = await response.json();
    dispatch(addTopRatedMovies(result.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
