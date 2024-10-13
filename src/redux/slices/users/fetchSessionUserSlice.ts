import { createSlice } from "@reduxjs/toolkit";
import { fetchSessionUser } from "../../actions/userActions";
import Cookies from "js-cookie";

interface userIFace {
  _id: string;
  username: string;
  image: string;
  token?: string;
}

interface initialStateIFace {
  user: userIFace;
  status: string;
  error: string | null;
}

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "")
  : ({} as userIFace);

const initialState: initialStateIFace = {
  user: userFromStorage,
  status: "",
  error: null,
};

const fetchSessionUserSlice = createSlice({
  name: "fetchSessionUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSessionUser.fulfilled, (state, { payload }) => {
        state.status = "success";

        const userData = {
          _id: payload._id,
          username: payload.username,
          image: payload.image,
        };

        state.user = userData;
        Cookies.set("accessToken", payload.accessToken, {
          secure: true,
          sameSite: "none",
        });
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .addCase(fetchSessionUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default fetchSessionUserSlice.reducer;
