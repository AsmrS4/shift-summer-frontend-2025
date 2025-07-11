import type { SessionProps, UserProps } from "@models/Session";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UserProps = {
    phone: '',
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    city: ''
}

const userSlice = createSlice({
    name:'session',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserProps>) => {
            state = action.payload;
            return action.payload
        },
        clearUser: (state) => {
            return initialState
        },
    }
})

export default userSlice.reducer;
export const {setUser, clearUser} = userSlice.actions;