import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addressSlice from '@store/Address/AddressReducer'
import packageSlice  from "@store/Packages/PackagesReducer";

const rootReducer = combineReducers({
    addressReducer: addressSlice,
    packageReducer: packageSlice
}) 

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
