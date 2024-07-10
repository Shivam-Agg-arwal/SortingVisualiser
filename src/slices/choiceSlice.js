import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortingTechnique: "Selection Sort",
    count: 10,
};

export const choiceSlice = createSlice({
    name: "choice",
    initialState,
    reducers: {
        setSortingTechnique(state, action) {
            state.sortingTechnique = action.payload;
        },
        setCount(state, action) {
            state.count = action.payload;
        },
    },
});

export const { setSortingTechnique, setCount } = choiceSlice.actions;
export default choiceSlice.reducer;
