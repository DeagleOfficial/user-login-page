import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: usersReducer
    }
})