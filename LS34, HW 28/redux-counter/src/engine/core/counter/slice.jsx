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
            return state.count + 1;

        },
        decrement: (state) => {
            return state.count - 1;
        },

    }
});

export const {increment, decrement} = counter.actions;

export default counter.reducer;
