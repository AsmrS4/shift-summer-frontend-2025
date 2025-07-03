import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addressSlice from '@store/Address/AddressReducer'

const rootReducer = combineReducers({
    addressReducer: addressSlice
}) 

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
