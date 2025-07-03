import type { ICity } from "@models/City"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface InitCityProps {
    cities: ICity[]
}

const initialState: InitCityProps = {
    cities: []
}

const addressSlice = createSlice( {
    name: 'city',
    initialState,
    reducers: {
        setOptions: (state, action: PayloadAction<ICity[]>) => {
            state.cities = action.payload;
        }
    }
})

export default addressSlice.reducer;
export const {setOptions} = addressSlice.actions;