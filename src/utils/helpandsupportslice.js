import { createSlice } from "@reduxjs/toolkit";


const helpAndSupport = createSlice({
    name:"help",
    initialState:{
        optionsList:null,
    },
    reducers:{
        addHelpOptions:(state,action) => {
            state.optionsList = action.payload;
        },
    },
});

export const {addHelpOptions} = helpAndSupport.actions;
export default helpAndSupport.reducer;