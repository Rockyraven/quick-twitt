import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const { data } = await axios.get("/api/posts");
  return data.posts;
});

export const createPost = createAsyncThunk("/post/create", async (data, thunkAPI) => {
    try {
      const { encodedToken, text } = data;
      const postData = JSON.stringify(text)
      const res = await axios.post(
        "/api/posts",
        { postData: text },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log(res.data.posts);
      return res.data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  });
  export const likePost = createAsyncThunk("/post/like", async (data, thunkAPI) => {
    try {
      const { postId, token } = data;
      const res = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
        );
        return res.data.posts;
      } catch (error) {
        thunkAPI.rejectWithValue(error);
      }
    });
    export const disLikePost = createAsyncThunk("/post/like", async (data, thunkAPI) => {
      try {
        const { postId, token } = data;
        const res = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: {
              authorization: token,
            },
          }
          );
          return res.data.posts;
        } catch (error) {
          thunkAPI.rejectWithValue(error);
        }
      });
      
      export const editPost = createAsyncThunk("/post/edit", async (data, thunkAPI) => {
          try {
            const { token, text, postId } = data;
            console.log(text)
            const postData = JSON.stringify(text)
            const res = await axios.post(
              `/api/posts/edit/${postId}`,
              { postData: text },
              {
                headers: {
                  authorization: token,
                },
              }
            );
            console.log(res.data)
            return res.data.posts;
          } catch (error) {
            thunkAPI.rejectWithValue(error);
          }
        });

  export const deletePost = createAsyncThunk(
    "/post/delete",
    async (data, thunkAPI) => {
      try {
        const { token, postId } = data;
        const res = await axios.delete(
          `/api/posts/${postId}`,
         
          {
            headers: {
              authorization: token,
            },
          }
        );
        return res.data.posts;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
}
); 
  
export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.posts = null;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
      state.posts = null;
    },
    [createPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.posts = null;
    },
    [createPost.fulfilled]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload
    },
    [createPost.rejected]: (state, action) => {
        state.loading = true;
        state.error = action.error;
        state.posts = null;
    },
    [editPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.posts = null;
    },
    [editPost.fulfilled]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload
    },
    [editPost.rejected]: (state, action) => {
        state.loading = true;
        state.error = action.error;
        state.posts = null;
    },
    [deletePost.pending]: (state) => {
      state.loading = true;
      state.posts = null;
      state.error = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
      state.posts = null;
    },
    [likePost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [likePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    [likePost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [disLikePost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [disLikePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    [disLikePost.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    }

  },
});
export default postSlice.reducer;
