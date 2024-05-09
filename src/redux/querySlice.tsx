import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import queryService from "./services/queryService";
import { extractErrorMessage } from "./utils";

// Register new query
export const addQuery = createAsyncThunk<any, any>(
  "query/add",
  async (query, thunkAPI) => {
    try {
      return await queryService.addQuery(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Get all query
export const getQueries = createAsyncThunk<any, any>(
  "query/all",
  async (user, thunkAPI) => {
    try {
      return await queryService.getQueries(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

const initialState = {
  queries: [],
  isLoading: false,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addQuery.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addQuery.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getQueries.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getQueries.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getQueries.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default querySlice.reducer;
