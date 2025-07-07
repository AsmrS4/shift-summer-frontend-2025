import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PackageCreate } from "@models/Package";
import type { Point } from "@models/DeliveryPoint";

interface InitProps {
    package: PackageCreate;
    senderPoint: Point,
    receiverPoint: Point
}
const initialState: InitProps = {
    package: {
        length: 0,
        width: 0,
        weight: 0,
        height: 0
    },
    senderPoint: {
        latitude: 0,
        longitude: 0
    }, 
    receiverPoint: {
        latitude: 0,
        longitude: 0
    } 
}

const processDeliverySlice = createSlice({
    name:'processDelivery',
    initialState,
    reducers: {
        setPackageDetails: (state, action: PayloadAction<PackageCreate>) => {
            state.package = action.payload;
        },
        setSenderPoint: (state, action: PayloadAction<Point>) => {
            state.senderPoint = action.payload;
        },
        setReceiverPoint: (state, action: PayloadAction<Point>) => {
            state.receiverPoint = action.payload;
        }
    }
})

export default processDeliverySlice.reducer;
export const {setPackageDetails, setSenderPoint, setReceiverPoint} = processDeliverySlice.actions;
