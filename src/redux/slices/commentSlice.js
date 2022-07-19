import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentOnPost = createAsyncThunk('comment/fetch',
async (data, thunkAPI) => {
    try{
        const { token, postId } = data;
        const res = await axios.get(
            `/api/comments/${postId}`, {
                headers: {
                    authorization: token,
                },
            }
        );
        return (res.data.comments)
    }
    catch(error) {
        thunkAPI.rejectWithValue(error);
    }
})

export const postComment = createAsyncThunk("/post/comment", async(data, thunkAPI) => {
    try {
        const { encodedToken, updateComment, postId } = data;
        const res = await axios.post(
            `/api/comments/add/${postId}`,
            { commentData: updateComment },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        return res.data.comments
    } catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const commentSlice = createSlice({
    name: "comment",
    initialState: {
        loading: false,
        error: null,
        commentsList: null
    },
    reducers: {},
    extraReducers: {
        [getCommentOnPost.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.commentsList = null;
        },
        [getCommentOnPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.commentsList = action.payload;
        },
        [getCommentOnPost.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.error;
            state.commentsList = null;
        },
        [postComment.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.commentsList = null;
        },
        [postComment.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.commentsList = action.payload;
        },
        [postComment.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.error;
            state.commentsList = null;
        }
    }
})
export default commentSlice.reducer