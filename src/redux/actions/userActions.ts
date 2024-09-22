import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";

export const fetchSessionUser = createAsyncThunk(
  "FETCH_SESSION_USER",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/users/fetch-session-user");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("LOGOUT", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/users/logout");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
