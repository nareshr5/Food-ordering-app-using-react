import {createStore} from "@reduxjs/toolkit";

import recommendationSliceReducer from "./recomedationSlice";

const AppSlice = createStore({
    reducer:{
        rec:recommendationSliceReducer,

    }
});

export default AppSlice;