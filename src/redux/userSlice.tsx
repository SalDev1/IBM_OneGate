import { createSlice } from "@reduxjs/toolkit";

type AppInitialState = {
    firstName : String | null;
    lastName : String | null;
    address : String | null;
    email : String | null;
    phone : String | null;
    password : String | null;
}

const initialState : AppInitialState = {
    firstName : "",
    lastName : "",
    address : "",
    email : "",
    phone :  "",
    password : "",
}

export const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {

    },
    extraReducers : (builder) => {

    }
})

export default userSlice.reducer;