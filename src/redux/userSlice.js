import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "", 
        password: ""
    },
    reducers: {
        update: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { update } = userSlice.actions

export const selectUser = (state) => state.user.value

export default userSlice.reducer