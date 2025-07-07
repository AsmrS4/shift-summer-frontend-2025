import type { DeliveryPoint } from "@models/DeliveryPoint"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface InitDeliveryPointsProps {
    cities: DeliveryPoint[]
}

const initialState: InitDeliveryPointsProps = {
    cities: []
}

const deliveryPointSlice = createSlice( {
    name: 'deliveryPoints',
    initialState,
    reducers: {
        setOptions: (state, action: PayloadAction<DeliveryPoint[]>) => {
            state.cities = action.payload;
        }
    }
})

export default deliveryPointSlice.reducer;
export const {setOptions} = deliveryPointSlice.actions;