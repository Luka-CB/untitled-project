import { createSlice } from "@reduxjs/toolkit";
import { registerCustomer } from "../../actions/userActions";
import Cookies from "js-cookie";

interface initialStateIFace {
  status: string;
  error: string | null;
}

const initialState: initialStateIFace = {
  status: "",
  error: null,
};

const registerCustomerSlice = createSlice({
  name: "registerCustomer",
  initialState,
  reducers: {
    resetRegister: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerCustomer.fulfilled, (state, { payload }) => {
        state.status = "success";

        const userData = {
          _id: payload.user._id,
          username: payload.user.username,
          image: payload.user.image,
        };

        Cookies.set("accessToken", payload.user.accessToken, {
          secure: true,
          sameSite: "none",
        });
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .addCase(registerCustomer.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload as string;
      });
  },
});

export const { resetRegister } = registerCustomerSlice.actions;

export default registerCustomerSlice.reducer;
