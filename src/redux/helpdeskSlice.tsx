import { createSlice } from "@reduxjs/toolkit";

type AppState = {
  currentComplaint: {
    complaint: String;
    subComplaint: String;
    description: String;
  };

};

const initialState: AppState = {
  currentComplaint: { complaint: "", subComplaint: "", description: "" },
};

export const helpDeskSlice = createSlice({
  name: "help-desk",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default helpDeskSlice.reducer;
