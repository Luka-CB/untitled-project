import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../actions/userActions";
import Cookies from "js-cookie";

interface initialStateIFace {
  status: string;
  error: string | null;
}

const initialState: initialStateIFace = {
  status: "",
  error: null,
};

const logoutUserSlice = createSlice({
  name: "fetchSessionUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "success";
        Cookies.remove("accessToken");
        localStorage.removeItem("user");
      })
      .addCase(logout.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default logoutUserSlice.reducer;
