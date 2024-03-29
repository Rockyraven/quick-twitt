import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import bookmarkReducer from './slices/bookmarkSlice'
import commentReducer from './slices/commentSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    bookmark: bookmarkReducer,
    comment: commentReducer,
    user: userReducer
  },
})