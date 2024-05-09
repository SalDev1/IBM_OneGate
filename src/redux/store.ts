import { configureStore } from "@reduxjs/toolkit";
import helpDeskReducer from "./helpdeskSlice";
import userReducer from "./authSlice";
import queryReducer from "./querySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    helpdesk: helpDeskReducer,
    query: queryReducer,
  },
});

// this returns the current state.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
