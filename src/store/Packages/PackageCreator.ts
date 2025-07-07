import { setPackages } from "./PackagesReducer"
import instance from "@api/index";

export const fetchPackageParams = () => async(dispatch:any) => {
    const response = await instance.get('/package/types')
    dispatch(setPackages(response.data.packages));
}