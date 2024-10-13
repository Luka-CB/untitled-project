import { createSlice } from "@reduxjs/toolkit";
import { test } from "../../actions/userActions";

interface initialStateIFace {
  status: string;
  error: string | null;
}

const initialState: initialStateIFace = {
  status: "",
  error: null,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(test.pending, (state) => {
        state.status = "loading";
      })
      .addCase(test.fulfilled, (state, { payload }) => {
        state.status = "success";

        console.log(payload);
      })
      .addCase(test.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload as string;
      });
  },
});

export default testSlice.reducer;
