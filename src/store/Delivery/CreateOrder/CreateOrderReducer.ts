import { createSlice, type PayloadAction, current } from "@reduxjs/toolkit";

interface ReceiverAddressProps {
    street: string,
    house: string,
    apartment: string,
    comment?: string ,
    isNonContact?: boolean
}

interface SenderAddressProps {
    street: string,
    house: string,
    apartment: string,
    comment?: string ,
}

interface PackageType {
    id: string,
    type: "DEFAULT" | "EXPRESS" 
}

interface PersonDetails {
    firstname: string,
    lastname: string,
    middlename?: string,
    phone: string|number;
}

interface InitProp {
    data: {
        packageId: string | number | null;
        optionType: "DEFAULT" | "EXPRESS" ;
        senderPointId: string | number | null;
        senderAddress: SenderAddressProps;
        sender: PersonDetails;
        receiverPointId: string | number | null;
        receiverAddress: ReceiverAddressProps;
        receiver: PersonDetails;
        payer: "RECEIVER" | "SENDER" 
    }
}

const initialState: InitProp = {
    data: {
        packageId: null,
        optionType: "DEFAULT",
        senderPointId: null,
        senderAddress : {
            street: "",
            house: "",
            apartment: "",
            comment: ""
        },
        sender: {
            firstname: "",
            lastname: "",
            middlename: "",
            phone: ""
        },
        receiverPointId: null,
        receiverAddress: {
            street: "",
            house: "",
            apartment: "",
            comment: "",
            isNonContact: true
        },
        receiver: {
            firstname: "",
            lastname: "",
            middlename: "",
            phone: ""
        },
        payer: "RECEIVER"
    }
}

const createOrderSlice = createSlice({
    name: 'createOrder',
    initialState,
    reducers: {
        setPackageDetails: (state, action:PayloadAction<PackageType>) => {
            state.data.packageId = action.payload.id;
            state.data.optionType = action.payload.type
            console.log(current(state.data))
        },
        setSender : (state, action: PayloadAction<SenderAddressProps>) => {
            state.data.senderAddress = action.payload
        },
        setReceiver : (state, action: PayloadAction<ReceiverAddressProps>) => {
            state.data.receiverAddress = action.payload;
        },
        setSenderPointId : (state, action) => {
            state.data.senderPointId = action.payload
        },
        setReceiverPointId : (state, action) => {
            state.data.senderPointId = action.payload
        },
        setSenderDetails: (state, action: PayloadAction<PersonDetails>) => {
            state.data.sender = action.payload
        },
        setReceiverDetails: (state, action: PayloadAction<PersonDetails>) => {
            state.data.receiver = action.payload
        },
        setPayer: (state, action) => {
            state.data.payer = action.payload
        },
        cancelCreateOrder: (state) => {
            state.data = initialState.data
        }

    }
})

export default createOrderSlice.reducer;
export const {
    setPackageDetails, setReceiver, 
    setPayer, setReceiverDetails, 
    setReceiverPointId, setSender, 
    setSenderDetails, setSenderPointId,
    cancelCreateOrder
} = createOrderSlice.actions;