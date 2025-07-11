import axios from "axios";
import type { Dispatch } from "redux";
import { setUser } from "./UserReducer";

export const fetchProfile = async(token: string) => async(dispatch: Dispatch) => {
    console.log('mounted')
    try {
        const response = await axios.get('https://shift-intensive.ru/api/users/session', {headers: {
            Authorization: `Bearer ${token}`
        }})
        console.log(response.data)
        dispatch(setUser(response.data.user));
    } catch (error) {
        console.log('gerer')
        console.log(error)
    }
}