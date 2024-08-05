import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {MOVIES_HEADER} from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIES_HEADER
    );
    const result = await response.json();
    dispatch(addNowPlayingMovies(result.results));
  };

  useEffect(() => {
    !nowPlayingMovies?.length && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
