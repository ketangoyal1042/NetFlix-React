import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    top_rated: [],
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerViode: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies : (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies : (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerViode, addPopularMovies, addTopRatedMovies } = movieSlice.actions;
