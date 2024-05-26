import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "5a9427648b0beebeb69579e7",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;