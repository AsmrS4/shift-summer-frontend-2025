import axios from "axios"
import { setPackages } from "./PackagesReducer"

export const fetchPackageParams = () => async(dispatch:any) => {
    try {
        const response = await axios({
            url: `https://shift-intensive.ru/api/delivery/package/types`,
            method: 'GET'
        }) 
        dispatch(setPackages(response.data.packages));
        
    } catch (error) {
        console.log(error)
        throw error
    }
}