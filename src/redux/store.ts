import { configureStore } from "@reduxjs/toolkit";
import helpDeskReducer from "./helpdeskSlice";
import userReducer from "./authSlice";

const store = configureStore({
    reducer : {
        user : userReducer,
        helpdesk : helpDeskReducer
    }
});

// this returns the current state.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;