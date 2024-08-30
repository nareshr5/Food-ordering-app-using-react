import {createSlice} from "@reduxjs/toolkit";

const recommendationSlice = createSlice({

    name:"recomendation",
    initialState:{
        bestPlaces:null,
    },
    reducers:{
        addBestPlacesToEat:(state,action)=>{
            state.bestPlaces = action.payload;

        }
    },
});

export const {addBestPlacesToEat} = recommendationSlice.actions;
export default recommendationSlice.reducer;