import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    },
});

export default gptslice.reducer;
export const { toggleGptSearchView } = gptslice.actions;