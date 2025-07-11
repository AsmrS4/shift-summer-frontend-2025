import type { UserProps } from "@models/Session";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

const initialState: UserProps = {
    _id: '',
    phone: '',
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    city: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserProps>) => {
            state = action.payload
        },
        clearUser: (state) => {
            state = initialState;
        },
    }
});

export default userSlice.reducer;
export const {setUser, clearUser} = userSlice.actions;