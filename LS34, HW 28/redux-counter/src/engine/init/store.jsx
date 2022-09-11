import { configureStore } from "@reduxjs/toolkit";

import counterReduser from "../core/counter/slice"

export const store = configureStore({
    reducer: {
        counter: counterReduser,
    }
})