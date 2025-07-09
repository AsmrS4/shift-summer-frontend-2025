import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DeliveryType, PackageCreate } from "@models/Package";
import type { Point } from "@models/DeliveryPoint";

interface InitProps {
    types: DeliveryType[],
    
}
const initialState: InitProps = {
    types: [ {
        days: 0,
        id: null,
        price: 0,
        type: 'EXPRESS' 
    }, {
        days: 0,
        id: null,
        price: 0,
        type: 'DEFAULT' 
    }]
}

const processDeliverySlice = createSlice({
    name:'processDelivery',
    initialState,
    reducers: {
        setTypes: (state, action: PayloadAction<DeliveryType[]>) => {
            state.types= action.payload;
            console.log(state.types)
        },
        clearTypes: (state) => {
            state.types = initialState.types
        }
    }
})

export default processDeliverySlice.reducer;
export const {setTypes, clearTypes} = processDeliverySlice.actions;
