import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import helpDeskService from "./services/helpDeskService";
import { extractErrorMessage } from "./utils";

export const addHelpDeskTicket = createAsyncThunk<any,any>('/helpdesktickets', async(helpDeskData , thunkAPI) => {
  try {
    return await helpDeskService.addHelpDeskTicket(helpDeskData);
  }
  catch (error){
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
})

export const getAllHelpDeskTickets = createAsyncThunk<any,any>('/helpdesktickets/all',async(user,thunkAPI) => {
  try {
    return await helpDeskService.getAllHelpDeskTickets(user);
  }
  catch(error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
})

const initialState = {
  helpDeskTickets : [],
  loading : false
}

export const helpDeskSlice = createSlice({
  name: "help-desk",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
     builder
     .addCase(addHelpDeskTicket.pending , (state) => {
         state.loading = true;
     })
     .addCase(addHelpDeskTicket.fulfilled , (state) => {
         state.loading = false;
     })
     .addCase(addHelpDeskTicket.rejected , (state) => {
         state.loading = false;
     })
     .addCase(getAllHelpDeskTickets.pending , (state) => {
         state.loading = true;
      })
      .addCase(getAllHelpDeskTickets.fulfilled , (state:any,action) => {
          state.loading = false;
          state.helpDeskTickets = [...state.helpDeskTickets, action.payload];
      })
      .addCase(getAllHelpDeskTickets.rejected , (state) => {
          state.loading = false;
      })
  },
});

export default helpDeskSlice.reducer;
