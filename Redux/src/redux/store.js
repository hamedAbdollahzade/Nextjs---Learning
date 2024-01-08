import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter1",
    initialState: { value: 20 }
})


export const store = configureStore({
    reducer: {
        counterMe: counterSlice.reducer
    },
})