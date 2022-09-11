import { configureStore } from '@reduxjs/toolkit'
import todo from '../../engine/core/slice'

export const store = configureStore({
    reducer: {
        todo: todo,
    }
})