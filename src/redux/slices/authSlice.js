import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (userData) => {
  const userDetail = JSON.stringify(userData);
  const { data } = await axios.post("/api/auth/login", userDetail);
  return data;
});
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
    encodedToken: null,
  },
  reducers: {
    clearError: (state)=>{
        state.loading =  false
        state.error = null
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      state.error = null;
      state.encodedToken = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.foundUser;
      state.loading = false;
      state.error = null;
      state.encodedToken = action.payload.encodedToken;
    },
    [login.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      state.error = action.error;
      state.encodedToken = null;
    },
  },
});
export const {clearError} = authSlice.actions
export default authSlice.reducer;
