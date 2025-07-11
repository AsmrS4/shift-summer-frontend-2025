import axios, { AxiosError } from "axios";
import type { Dispatch } from "@reduxjs/toolkit";

import type { LoginProps } from "@models/Session";
import { clearSession, setErrorMessage, setSession } from "./SessionReducer";
import { clearUser, setUser } from "./User/UserReducer";

export const authorizeUser = (payload: LoginProps) => async (dispatch: Dispatch) => {
    try {
        const response = await axios({
                url: `https://shift-intensive.ru/api/users/signin`,
                method: 'POST',
                data: {
                    ...payload,
                },
            });
        dispatch(setSession({isAuth: true, token: response.data.token, error: null}))
        dispatch(setUser(response.data.user));
    
    } catch (error) {
        if(error instanceof AxiosError && error.response) {
            dispatch(setErrorMessage(error.response.data.reason))
        } else {
            console.log(error)
        }
    }
}

export const logoutUser = () => async(dispatch: Dispatch) => {
    localStorage.clear();
    dispatch(clearSession());
    dispatch(clearUser());
    return;
}