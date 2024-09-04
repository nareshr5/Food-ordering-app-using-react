import {createSlice} from "@reduxjs/toolkit";

const recommendationSlice = createSlice({

    name:"recomendation",
    initialState:{
        whatsOnMind:null,
        bestPlaces:null,
        bestCuisines:null,
        
    },
    reducers:{
        addWhatsOnMind:(state,action)=>{
            state.whatsOnMind = action.payload;
        },
        
        addBestPlacesToEat:(state,action)=>{
            state.bestPlaces = action.payload;
        },
        addBestCuisines:(state,action) =>{
            state.bestCuisines=action.payload;
        }
    },
});

export const {addBestPlacesToEat,addBestCuisines,addWhatsOnMind} = recommendationSlice.actions;
export default recommendationSlice.reducer;