import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

import themeSlice from "./slices/themeSlice";
import fetchSessionUserSlice from "./slices/users/fetchSessionUserSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    sessionUser: fetchSessionUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
