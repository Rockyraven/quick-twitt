import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("api/users", async (thunkAPI) => {
    try {
      const {data} = await axios.get('api/users')
      return data.users;
    }
    catch(error){
      thunkAPI.rejectWithValue(error)
    }
  })

export const userSlice = createSlice({
    name: "user",
    initialState: {
        allUsers: []
    },
    reducers: {},
    extraReducers: {
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
    }
})
export default userSlice.reducer;