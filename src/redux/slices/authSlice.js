import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllUsers = createAsyncThunk("api/users", async (thunkAPI) => {
  try {
    const {data} = await axios.get('api/users')
    return data.users;
  }
  catch(error){
    thunkAPI.rejectWithValue(error)
  }
})
export const login = createAsyncThunk("auth/login", async (userData) => {
  const userDetail = JSON.stringify(userData);
  const { data } = await axios.post("/api/auth/login", userDetail);
  console.log(data);
  return data;
});

export const signUp = createAsyncThunk("auth/signup", async (data, thunkAPI) => {
  try {
   const { firstName, lastName, username, userphoto, password } = data
   console.log(username)
    const res = await axios.post(
      `/api/auth/signup`,
      {
        username: username,
        firstName: firstName,
        lastName: lastName,
        userphoto: userphoto,
        password: password
      },
     
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    loading: false,
    error: null,
    allUsers: [],
    user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
    encodedToken: localStorage.getItem("encodedToken")
    ? JSON.parse(localStorage.getItem("encodedToken"))
    : null,
  },
  reducers: {
    clearError: (state)=>{
        state.loading =  false
        state.error = null
    },
    setError: (state, action)=>{
        state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      state.encodedToken = null;
      localStorage.removeItem('user')
      localStorage.removeItem('encodedToken')
      toast.success("Logged out successfully");
    },
    
   
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
      localStorage.setItem('user', JSON.stringify(action.payload.foundUser))
      localStorage.setItem('encodedToken', JSON.stringify(action.payload.encodedToken))
    }, 
    [login.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      console.log({action});
      state.error = action.error;
      state.encodedToken = null;
    },
    [signUp.pending]: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      state.error = null;
      state.encodedToken = null;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.createdUser;
      state.loading = false;
      state.error = null;
      state.encodedToken = action.payload.encodedToken;
      localStorage.setItem('user', JSON.stringify(action.payload.createdUser))
      localStorage.setItem('encodedToken', JSON.stringify(action.payload.encodedToken))
    }, 
    [signUp.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      console.log(action)
      state.error = action.error;
      state.encodedToken = null;
    },
    [getAllUsers.pending]: (state) => {
      state.allUsers = null;
      state.error = null;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
      state.error = null;
      
    }, 
    [getAllUsers.rejected]: (state, action) => {
      state.allUsers = null;
      state.error = action.error;
    },
  },
});
export const {clearError, logout, setError} = authSlice.actions
export default authSlice.reducer;
