import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";

export const appStore = configureStore({
    reducer: {
        movies: moviesReducer ,
        userAuth: userSlice,
        gpt: gptReducer,
        language: configSlice
    }
})