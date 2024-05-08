import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./services/authService";
import { extractErrorMessage } from "./utils";

// Create AsyncThunk for the registered users and login users.
const getUser: any = localStorage.getItem("user");
const user: any = JSON.parse(getUser);

const initialState = {
  user: user ? user : null,
  isLoading: false,
};

// Register new user
export const register = createAsyncThunk<any, any>(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Login user
export const login = createAsyncThunk<any, any>(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const logout = createAction("auth/logout");

// NOTE: in cases of login or register pending or rejected then user will
// already be null so no need to set to null in these cases

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      authService.logout();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
