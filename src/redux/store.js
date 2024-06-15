import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";

export default configureStore({
    reducer: {
        isauth: authSliceReducer,
    },
})
