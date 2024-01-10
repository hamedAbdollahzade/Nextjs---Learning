import { configureStore, createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter1",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            // state.value += action.payload
            state.value += action.payload.amount
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

// export const {increment , decrement} = counterSlice.actions



export const store = configureStore({
    reducer: {
        counterMe: counterSlice.reducer
    },
})

