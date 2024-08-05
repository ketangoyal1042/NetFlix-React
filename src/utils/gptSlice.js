import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        GptMovies: null,
        SearchQueries: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTResults: (state, action) => {
            const {movies, search} = action.payload;
            state.GptMovies = movies;
            state.SearchQueries = search;
        }
    },
});

export default gptslice.reducer;
export const { toggleGptSearchView, addGPTResults } = gptslice.actions;