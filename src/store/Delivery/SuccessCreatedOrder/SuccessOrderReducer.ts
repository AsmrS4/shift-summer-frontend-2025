import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface StatusProps {
    id: string;
    status: number;
    address: string;
    type: string;
}
const initialState: StatusProps = {
    id: '',
    status: 0,
    address: '',
    type: ''
}

const successSlice = createSlice({
    name:'success',
    initialState,
    reducers: {
        setDetails: (state, action: PayloadAction<StatusProps>) => {
            return action.payload
        },
        resetDetails: (state) => {
            return initialState
        }
    }
})

export default successSlice.reducer;
export const {setDetails, resetDetails} = successSlice.actions