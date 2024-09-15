import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  isLoading: boolean;
  error: boolean;
  data: {};
}

const initialState: loginState = {
  isLoading: true,
  error: false,
  data: {},
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<loginState>) => {
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
