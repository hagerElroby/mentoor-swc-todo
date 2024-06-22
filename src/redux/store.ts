// src/store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
    id: number;
    checked: boolean;
    item: string;
}

interface TodoState {
    items: Item[];
}

const initialState: TodoState = {
    items: [
        { id: 1, checked: false, item: "Almonds, Unsalted, in the blue bag" },
        { id: 2, checked: false, item: "Pizza" },
        { id: 3, checked: false, item: "Bread" },
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            const newItem = {
                id: state.items.length + 1,
                checked: false,
                item: action.payload,
            };
            state.items.push(newItem);
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleItem: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.checked = !item.checked;
            }
        },
    },
});

export const { addItem, deleteItem, toggleItem } = todoSlice.actions;

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
