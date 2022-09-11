//Core
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counter = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
             state.count += 1;
             return state

        },
        decrement: (state) => {
            state.count -= 1;
            return state
        },

    }
});

export const {increment, decrement} = counter.actions;

export default counter.reducer;
