import {configureStore} from "@reduxjs/toolkit";

import recommendationSliceReducer from "./recomedationSlice";

const appStore = configureStore({
    reducer:{
        rec:recommendationSliceReducer,

    }
});

export default appStore;