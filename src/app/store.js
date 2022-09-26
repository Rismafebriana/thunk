import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../components/Post";

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});