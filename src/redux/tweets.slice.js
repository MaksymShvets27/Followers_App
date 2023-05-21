import { createSlice } from "@reduxjs/toolkit";
import { tweetsAsyncThunk, tweetsFollowingAsyncThunk } from "./tweets.thunk";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    tweets: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(tweetsAsyncThunk.fulfilled, (state, { payload }) => {
        state.tweets = payload;
      })
      .addCase(tweetsFollowingAsyncThunk, (state, { payload }) => {
        state.tweets = payload;
      }),
});

export default tweetsSlice.reducer;
