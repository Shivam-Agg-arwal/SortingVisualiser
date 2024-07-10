import { configureStore } from "@reduxjs/toolkit";
import choiceReducer from "../slices/choiceSlice";

const store = configureStore({
    reducer: {
        choice: choiceReducer,
    },
});

export default store;
