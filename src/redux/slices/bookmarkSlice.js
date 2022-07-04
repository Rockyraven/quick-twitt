import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const fetchBookmark = createAsyncThunk(
  "bookmark/fetch",
  async (data, thunkAPI) => {
    try {
      const { token } = data;
      const res = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToBookmark = createAsyncThunk(
  "/bookmark/add",
  async (data, thunkAPI) => {
    try {
      const { token, postId } = data;
      const res = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      return res.data.bookmarks;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteBookmarkPost = createAsyncThunk(
  "/bookmark/delete",
  async (data, thunkAPI) => {
    try {
      const { token, postId } = data;
      const res = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return res.data.bookmarks;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    loading: false,
    error: null,
    bookmarks: [],
  },
  reducers: {},
  extraReducers: {
    [fetchBookmark.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.bookmarks = null;
    },
    [fetchBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.bookmarks = action.payload;
    },
    [fetchBookmark.rejected]: (state, action) => {
      state.loading = true;
      state.bookmarks = null;
      state.error = action.error;
    },
    [addToBookmark.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.bookmarks = null;
    },
    [addToBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
      state.error = null;
      toast.success("Post added to bookmark");
    },
    [addToBookmark.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
      state.bookmarks = null;
    },
    [deleteBookmarkPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.bookmarks = null;
    },
    [deleteBookmarkPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
      state.error = null;
      toast.success("Post added to bookmark");
    },
    [deleteBookmarkPost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
      state.bookmarks = null;
    },
  },
});

export default bookmarkSlice.reducer;
