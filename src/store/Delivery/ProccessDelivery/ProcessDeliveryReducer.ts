import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DeliveryType} from "@models/Package";


interface InitProps {
    types: DeliveryType[],
    
}
const initialState: InitProps = {
    types: [ {
        days: 0,
        id: '',
        price: 0,
        name:'',
        type: 'EXPRESS' 
    }, {
        days: 0,
        id: '',
        price: 0,
        name:'',
        type: 'DEFAULT' 
    }]
}

const processDeliverySlice = createSlice({
    name:'processDelivery',
    initialState,
    reducers: {
        setTypes: (state, action: PayloadAction<DeliveryType[]>) => {
            state.types= action.payload;
        },
        clearTypes: (state) => {
            state.types = initialState.types
        }
    }
})

export default processDeliverySlice.reducer;
export const {setTypes, clearTypes} = processDeliverySlice.actions;
