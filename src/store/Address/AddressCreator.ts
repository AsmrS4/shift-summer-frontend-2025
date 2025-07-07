import { setOptions } from "./AddressReducer";
import instance from "@api/index";

export const fetchAddress = () => async(dispatch: any) => {
    const response = await instance.get('/points')
    dispatch(setOptions(response.data.points));
}