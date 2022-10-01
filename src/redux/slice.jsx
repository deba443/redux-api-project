import { createSlice } from '@reduxjs/toolkit'

// const initialState = []

export const counterSlice = createSlice({
    name: 'userData',
    initialState: [],
    reducers: {
        add: (state, data) => {
            state = [...data.payload]
            console.log(state);

            return state
        },
    },
})

export const { add } = counterSlice.actions

export default counterSlice.reducer