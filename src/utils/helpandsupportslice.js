import { createSlice } from "@reduxjs/toolkit";


const helpAndSupport = createSlice({
    name:"help",
    initialState:{
        optionsList:null,
        onboardingDetails:null,
        toggle:false,
        isOnboarding:false,
        isLegal:false,
        isFaqs:false,
        isInstamart:false,
    },
    reducers:{
        addHelpOptions:(state,action) => {
            state.optionsList = action.payload;
        },
        addOnboardingDetails:(state,action)=>{
            state.onboardingDetails=action.payload;
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
        toggle:(state)=>{
            state.toggle=!state.toggle;
        }
    },
});

export const {addHelpOptions,toggleOnboarding,toggleLegal,toggleFaqs,toggleInstamart,addOnboardingDetails,toggle} = helpAndSupport.actions;
export default helpAndSupport.reducer;