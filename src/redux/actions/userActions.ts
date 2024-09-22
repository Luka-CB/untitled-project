import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import { regCustomerDataIFace } from "../../context/regCustomerContext";
import { AxiosError } from "axios";

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

export const registerCustomer = createAsyncThunk(
  "REGISTER_CUSTOMER",
  async (user: regCustomerDataIFace, thunkAPI) => {
    try {
      const { data } = await api.post("/users/customer/register", user);
      return data;
    } catch (error: AxiosError | any) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
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
