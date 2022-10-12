import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../Fetures/Posts/postSlice";
import userRdeucer from "../Fetures/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducers,
    users: userRdeucer,
  },
});
