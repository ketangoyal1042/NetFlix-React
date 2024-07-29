import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userAuth: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.userAuth = action.payload;
    },
    removeUser: (state) => {
      state.userAuth = null;
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
