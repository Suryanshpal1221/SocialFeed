import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  data: {},
};

export const signup = createAsyncThunk(
  "signup",
  async ({ username, email, password }) => {
    try {
      const res = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (!res.ok) {
        console.log("ERROR2", res);
        return res;
      }
      const data = res.json();
      return data;
    } catch (error) {
      console.log("ERROR2", error);
    }
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const {} = signupSlice.actions;

export default signupSlice.reducer;
