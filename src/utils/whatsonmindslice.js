import { createSlice } from "@reduxjs/toolkit";
import WhatsOnMind from "../components/whatsonmind";

const Whatsonminditemspecificslice = createSlice({
    name:"whatonminditemspecificslice",
    initialState:{
        WhatsOnMind_itemList:"",
    },
    reducers:{
        addItem:(state,action) =>{
            state.WhatsOnMind_itemList=action.payload;
        }

    },
});

export const {addItem} = Whatsonminditemspecificslice.actions;
export default Whatsonminditemspecificslice.reducer;