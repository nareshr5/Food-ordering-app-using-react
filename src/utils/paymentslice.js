import { createSlice } from "@reduxjs/toolkit";


const paymentSlice =  createSlice({
    name:"paymentSlice",
    initialState:{
        paymentValue:0,
    },
    reducers:{
        addPayment:(state,action)=>{
            state.paymentValue=action.payload;

        },
    },
});

export const {addPayment} =paymentSlice.actions;
export default paymentSlice.reducer;