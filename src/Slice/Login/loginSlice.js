import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  data: {},
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    update: (state, action) => {
      state.isLoading = action.payload.isLoading ?? state.isLoading;
      state.error = action.payload.error ?? state.error;
      state.data = {
        ...state.data,
        ...action.payload.data,
      };
    },
  },
});

export const { update } = loginSlice.actions;

export default loginSlice.reducer;
