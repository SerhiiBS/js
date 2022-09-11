
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setDefault: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        updateItems: (state, action) => {
            const { id, description } = action.payload;
            state.items = state.map(item => {
                if (item.id === id) {
                    item.description = description
                }
                return item;
            });
        },
    }
})
export const { setItem, setLoading } = todo.actions;
export default todo.reducer;