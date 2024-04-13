import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
