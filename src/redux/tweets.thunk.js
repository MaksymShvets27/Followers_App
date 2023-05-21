import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_API } from "../constants/API.js";

export const tweetsAsyncThunk = createAsyncThunk(
  "tweets/fetchAll",
  async (page, thunkApi) => {
    try {
      const url = new URL(`${BASE_URL_API}/contacts`);
      url.searchParams.append("page", 1);
      url.searchParams.append("limit", page * 3);
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const tweetsFollowingAsyncThunk = createAsyncThunk(
  "tweets/following",
  async (user, thunkApi) => {
    try {
      const { data } = await axios.put(
        BASE_URL_API + `/contacts/${user.id}`,
        user
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
