import type { IPackage } from "@models/Package";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitPackage {
    packages: IPackage[]
}
const initialState: InitPackage= {
    packages: []
}

export const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        setPackages: (state, action: PayloadAction<IPackage[]>)  => {
            state.packages = action.payload
        }
    }
}) 

export default packageSlice.reducer;
export const {setPackages} = packageSlice.actions