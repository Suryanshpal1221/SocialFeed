import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  isLoading: boolean;
  error: boolean;
  data: {};
}

const initialState: SignupState = {
  isLoading: false,
  error: false,
  data: {},
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<SignupState>) => {
      state.isLoading = action.payload.isLoading ?? state.isLoading;
      state.error = action.payload.error ?? state.error;
      state.data = {
        ...state.data,
        ...action.payload.data,
      };
    },
  },
});

export const { create } = signupSlice.actions;

export default signupSlice.reducer;
