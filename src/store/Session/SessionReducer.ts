import type { SessionProps } from "@models/Session";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: SessionProps = {
    isAuth: !!localStorage.getItem("ACCESS_TOKEN"),
    token: localStorage.getItem("ACCESS_TOKEN"),
    error: null
}

const sessionSlice = createSlice({
    name:'session',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<SessionProps>) => {
            state.token = action.payload.token;
            state.isAuth = true;
            state.error = null;
            localStorage.setItem("ACCESS_TOKEN", action.payload.token ?? '');
        },
        setErrorMessage: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        clearSession: (state) => {
            state.isAuth = false;
            state.token = null;
            state.error = null;
            localStorage.removeItem("ACCESS_TOKEN")
        },
    }
})

export default sessionSlice.reducer;
export const {setSession, setErrorMessage,clearSession} = sessionSlice.actions;