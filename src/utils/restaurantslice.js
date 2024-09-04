import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name:"restaurantslice",
    initialState:{
        resList:null,
        resWithOnlineDelivery:null,
    },
    reducers:{
        addRestaurantList:(state,action)=>{
            state.resList=action.payload;
        },
        addOnlineDelivery:(state,action)=>{
            state.resWithOnlineDelivery = action.payload;
        },
    },
});

export const {addRestaurantList,addOnlineDelivery} = restaurantSlice.actions;
export default restaurantSlice.reducer;