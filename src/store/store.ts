import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deliveryPointSlice from '@store/Address/AddressReducer'
import packageSlice  from "@store/Packages/PackagesReducer";

const rootReducer = combineReducers({
    addressReducer: deliveryPointSlice,
    packageReducer: packageSlice
}) 

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
