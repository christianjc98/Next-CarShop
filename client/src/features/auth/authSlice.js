import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, error: false },
  reducers: {
    setCredentials: (state, actions) => {
      const { accessToken, user } = actions.payload;
      state.token = accessToken;
      state.user = user;
    },
    logout: (state, actions) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

//Selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
