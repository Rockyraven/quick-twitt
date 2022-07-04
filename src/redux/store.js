import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import bookmarkReducer from './slices/bookmarkSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    bookmark: bookmarkReducer
  },
})