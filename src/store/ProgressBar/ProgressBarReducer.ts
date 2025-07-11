import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    step: 1,
    threshold: 7
}
const progressSlice = createSlice({
    name:'progress',
    initialState,
    reducers: {
        incrementStep: (state) => {
            if(state.step < 7) {
                state.step += 1
            }
        },
        decrementStep: (state) => {
            if(state.step > 1) {
                state.step -= 1
            }
        },
        resetStep: (state) => {
            state.step = 1
        }
    }
})

export default progressSlice.reducer;
export const {
    incrementStep, decrementStep, resetStep
} = progressSlice.actions;