import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../feature/counter/counterSlice";

export const store = configureStore({
    reducer: {
        concac: counterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;