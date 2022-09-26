import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import notify from "react-hot-toast";

const API = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  entities: [],
  loading: false,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

const Post = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.entities = payload;
        state.loading = false;
        notify.success("Success!");
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        notify.error("Failed!");
      });
  },
});

export default Post.reducer;