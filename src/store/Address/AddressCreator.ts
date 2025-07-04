import axios, { AxiosError } from "axios"
import { setOptions } from "./AddressReducer";


export const fetchAddress = () => async(dispatch: any) => {
    try {
        const response = await axios({
            url: `https://shift-intensive.ru/api/delivery/points`,
            method: 'GET'
        })
        console.log(response.data)
        dispatch(setOptions(response.data.points));
    } catch (error) {
        console.log(error)
        throw error;
    }
}