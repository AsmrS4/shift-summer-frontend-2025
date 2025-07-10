import type { PackageProps } from "@models/Package";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitPackage {
    packages: PackageProps[]
}
const initialState: InitPackage= {
    packages: []
}

export const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        setPackages: (state, action: PayloadAction<PackageProps[]>)  => {
            state.packages = action.payload
        }
    }
}) 

export default packageSlice.reducer;
export const {setPackages} = packageSlice.actions