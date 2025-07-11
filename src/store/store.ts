import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deliveryPointSlice from '@store/Address/AddressReducer'
import packageSlice  from "@store/Packages/PackagesReducer";
import processDeliverySlice from '@store/Delivery/ProccessDelivery/ProcessDeliveryReducer';
import createOrderSlice from '@store/Delivery/CreateOrder/CreateOrderReducer'
import progressSlice from '@store/ProgressBar/ProgressBarReducer'
import successSlice from '@store/Delivery/SuccessCreatedOrder/SuccessOrderReducer'
import sessionSlice from '@store/Session/SessionReducer';

const rootReducer = combineReducers({
    addressReducer: deliveryPointSlice,
    packageReducer: packageSlice,
    createOrderReducer: createOrderSlice,
    processDeliveryReducer: processDeliverySlice,
    progressReducer: progressSlice,
    successReducer: successSlice,
    sessionReducer: sessionSlice
}) 

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
