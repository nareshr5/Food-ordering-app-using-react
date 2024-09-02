import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name:"restaurantslice",
    initialState:{
        resList:null,
    },
    reducers:{
        addRestaurantList:(state,action)=>{
            state.resList=action.payload;
        },
    },
});

export const {addRestaurantList} = restaurantSlice.actions;
export default restaurantSlice.reducer;