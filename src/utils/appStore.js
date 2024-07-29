import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";

export const appStore = configureStore({
    reducer: {
        movies: moviesReducer ,
        userAuth: userSlice,
    }
})