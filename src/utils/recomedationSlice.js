import {createSlice} from "@reduxjs/toolkit";

const recommendationSlice = createSlice({

    name:"recomendation",
    initialState:{
        bestPlaces:null,
        bestCuisines:null,
    },
    reducers:{
        addBestPlacesToEat:(state,action)=>{
            state.bestPlaces = action.payload;
        },
        addBestCuisines:(state,action) =>{
            state.bestCuisines=action.payload;
        }
    },
});

export const {addBestPlacesToEat,addBestCuisines} = recommendationSlice.actions;
export default recommendationSlice.reducer;