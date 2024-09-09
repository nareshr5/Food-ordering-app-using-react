import { createSlice } from "@reduxjs/toolkit";


const helpAndSupport = createSlice({
    name:"help",
    initialState:{
        optionsList:null,
        isOnboarding:false,
        isLegal:false,
        isFaqs:false,
        isInstamart:false,
    },
    reducers:{
        addHelpOptions:(state,action) => {
            state.optionsList = action.payload;
        },
        toggleOnboarding:(state,action) =>{
            state.isOnboarding= !state.isOnboarding;
        },
        toggleLegal:(state,action) =>{
            state.isLegal= !state.isLegal;
        },
        toggleFaqs:(state,action) =>{
            state.isFaqs= !state.isFaqs;
        },
        toggleInstamart:(state,action) =>{
            state.isInstamart= !state.isInstamart;
        },
    },
});

export const {addHelpOptions,toggleOnboarding,toggleLegal,toggleFaqs,toggleInstamart} = helpAndSupport.actions;
export default helpAndSupport.reducer;